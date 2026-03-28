import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '../../../../../prisma/prisma-client';
import { UserRole } from '@prisma/client';

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || '',
            profile(profile, tokens) {
                return {
                    id: profile.id.toString(),
                    name: profile.name || profile.login,
                    email: profile.email,
                    image: profile.avatar_url,
                    role: 'USER' as UserRole,
                };
            },
        }),

        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials) return null;

                const user = await prisma.user.findFirst({
                    where: { email: credentials.email },
                });

                if (!user) return null;
                if (credentials.password !== user.password) return null;

                return {
                    id: String(user.id),
                    name: user.name,
                    email: user.email,
                    role: user.role,
                };
            },
        }),
    ],

    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },

    callbacks: {
        async jwt({ token, user, account }) {
            if (user) {
                const dbUser = await prisma.user.findFirst({
                    where: { email: user.email },
                });

                if (!dbUser) {
                    return {};
                }

                token.id = String(dbUser.id);
                token.name = dbUser.name;
                token.email = dbUser.email;
                token.role = dbUser.role;
                token.provider = account?.provider;
            }

            if (token.email) {
                const dbUser = await prisma.user.findFirst({
                    where: { email: token.email },
                });

                if (!dbUser) {
                    return {};
                }

                token.id = String(dbUser.id);
                token.name = dbUser.name;
                token.email = dbUser.email;
                token.role = dbUser.role;
            }

            return token;
        },

        session({ session, token }) {
            if (!token?.id) {
                return null;
            }

            if (session?.user) {
                session.user.id = token.id as string;
                session.user.name = token.name as string;
                session.user.email = token.email as string;
                session.user.role = token.role as string;
                session.user.provider = token.provider as string;
            }

            return session;
        },

        async signIn({ user, account }) {
            try {
                if (!account) return false;

                // Credentials: просто разрешаем
                if (account.provider === 'credentials') return true;

                // GitHub provider
                if (account.provider === 'github') {
                    if (!user.email) return false;

                    // Проверяем, есть ли пользователь в БД
                    let existingUser = await prisma.user.findFirst({
                        where: {
                            OR: [{ providerId: account.providerAccountId }, { email: user.email }],
                        },
                    });

                    if (existingUser) {
                        // Обновляем данные пользователя
                        await prisma.user.update({
                            where: { id: existingUser.id },
                            data: {
                                name: user.name,
                                provider: account.provider,
                                providerId: account.providerAccountId,
                                email: user.email,
                            },
                        });
                    } else {
                        // Создаем нового пользователя
                        await prisma.user.create({
                            data: {
                                email: user.email,
                                name: user.name,
                                password: account.providerAccountId,
                                provider: account.provider,
                                providerId: account.providerAccountId,
                                role: 'USER',
                                UserBasket: { create: {} },
                            },
                        });
                    }

                    return true;
                }

                return false;
            } catch (error) {
                console.error('SignIn error:', error);
                return false;
            }
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
