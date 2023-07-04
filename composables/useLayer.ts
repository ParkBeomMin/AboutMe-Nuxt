export const usePassWordLayer = () => {
    const passwordLayerData = useState<{
        isShow: boolean;
        callback?: Function;
    }>("passwordLayer", () => ({ isShow: false }));

    const setIsShowPasswordLayer = ({
        isShow,
        callback,
    }: {
        isShow: boolean;
        callback?: Function;
    }) => {
        passwordLayerData.value = { isShow, callback };
    };

    return {
        passwordLayerData,
        setIsShowPasswordLayer,
    };
};
export const useMoneyLayer = () => {
    const moneyLayerData = useState<{ isShow: boolean }>("moneyLayer", () => ({
        isShow: false,
        moneyList: [
            {
                text: "🍺",
                url: "https://qr.kakaopay.com/Ej7qeAGsJ7d006900",
            },
            {
                text: "☕️",
                url: "https://qr.kakaopay.com/Ej7qeAGsJ3e807242",
            },
            {
                text: "🍫",
                url: "https://qr.kakaopay.com/Ej7qeAGsJ1f402891",
            },
        ],
    }));

    const setIsShowMoneyLayer = ({ isShow }: { isShow: boolean }) => {
        moneyLayerData.value.isShow = isShow;
    };

    return {
        moneyLayerData,
        setIsShowMoneyLayer,
    };
};

export const useAdLayer = () => {
    const adLayerData = useState<{ isShow: boolean }>("adLayer", () => ({
        isShow: false,
    }));
    const setIsShowAdLayer = ({ isShow }: { isShow: boolean }) => {
        adLayerData.value = { isShow };
    };

    return {
        adLayerData,
        setIsShowAdLayer,
    };
};
