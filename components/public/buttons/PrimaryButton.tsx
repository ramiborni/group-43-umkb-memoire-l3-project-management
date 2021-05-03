const PrimaryButton = ({text, click} : {
        text: string,
        click: () => void
    }) => {
    return (
        <button onClick={
              (e) => click()
            }
            className="focus:outline-none h-10 w-full bg-purple-500 shadow-lg hover:shadow-xl ease-linear transition-all duration-150 active:bg-purple-700 text-white rounded">
            {text} </button>
    );
}
PrimaryButton.defaultProps = {
    text: '',
    click : () => {}
}
export default PrimaryButton;
