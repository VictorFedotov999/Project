interface IProps {
    setOpenRegister: (open: boolean) => void;
}

export const AuthorizationOut = ({ setOpenRegister }: IProps) => {
    return (
        <>
            <div className='popup__form-btn authorization' onClick={() => setOpenRegister(true)}>
                Регистрация
            </div>
        </>
    );
};
