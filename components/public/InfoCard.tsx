import {ReactNode} from "react";

const Card = ({children} : {
    children: ReactNode
}) => {
    return (

        <>
            <div> {children} </div>
            <style jsx>
                {`
               {
                   div{
                    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                    width: 100%;
                    padding: 1.25rem;
                    background-color: rgb(255, 255, 255) !important;
                    border-radius: 0.75rem;
                    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
                   }
               }
              `} </style>
        </>
    );
}

export default Card;
