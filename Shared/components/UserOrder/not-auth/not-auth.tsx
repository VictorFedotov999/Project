export const NotAuth = () => {
    return (
        <div className='container'>
            <div className='auth-required'>
                <h1 className='auth-required__title'>🔒 Требуется авторизация</h1>
                <p className='auth-required__message'>
                    Чтобы посмотреть историю заказов, пожалуйста, авторизуйтесь.
                </p>
            </div>
        </div>
    );
};
