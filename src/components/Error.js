import {useRouteError} from 'react-router-dom';

const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error">
            <h1>oh wait ☹️</h1>
            <p>Page Not Found</p>
        </div>
    );
}

export default Error;