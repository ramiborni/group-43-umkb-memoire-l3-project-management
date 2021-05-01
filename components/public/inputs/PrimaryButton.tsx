const PrimaryButton = ({text, click} : {
        text: string,
        click: () => void
    }) => {
    return (
        <button onClick={
              (e) => click()
            }
            className="focus:outline-none h-10 w-full bg-purple-500 shadow-lg hover:shadow-xl transition ease-in duration-200 focus:bg-purple-600 text-white rounded">
            {text} </button>
    );
}
PrimaryButton.defaultProps = {
    text: '',
    click : () => {}
}
export default PrimaryButton;
