interface Setting {
    id: number;
    name: string;
    path: string;
}

interface IProps {
    set: Setting;
    onClickSetting: (id: number) => void;
    activeId: number;
}

export const ProfilePopupItem = ({ set, onClickSetting, activeId }: IProps) => {
    return (
        <>
            <h3
                key={set.id}
                onClick={() => onClickSetting(set.id)}
                className={
                    activeId === set.id
                        ? 'header__profile_popup-text active'
                        : 'header__profile_popup-text'
                }
            >
                {set.name}
            </h3>
        </>
    );
};
