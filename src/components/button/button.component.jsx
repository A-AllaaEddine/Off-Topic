import { BaseButton, IconButton, InvertedButton } from "./button.styles";

export const BUTTON_TYPES_CLASSES = {
    base: 'base',
    icon: 'icon',
    inverted: 'inverted'
}

const getBottun = (buttonType = BUTTON_TYPES_CLASSES.base) => (
    {
        [BUTTON_TYPES_CLASSES.base]: BaseButton,
        [BUTTON_TYPES_CLASSES.icon]: IconButton,
        [BUTTON_TYPES_CLASSES.inverted]: InvertedButton
    }[buttonType]
)

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
    const CustomButton = getBottun(buttonType);
    return (
        <CustomButton
            disabled={isLoading}
            {...otherProps}
        >
            {children}
        </CustomButton>
    )
}

export default Button;