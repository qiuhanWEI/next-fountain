/* import Layout from "../components/Layout";
// import fetch from "isomorphic-unfetch";
import promise from 'es6-promise';
import fetch from'isomorphic-fetch';

promise.polyfill();

const submit = () => {
    const params = { name: 'test1024' };

    // fetch("http://47.97.118.7:3001/sendemail")
    fetch("https://fast.fountain-site.top/sendemail", {
        method: 'POST',
        headers: {
            // 'Content-Type': 'application/json'
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        // body: JSON.stringify({ name: 'test1018' })
        body: Object.keys(params)
                    .map(key => {
                        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
                    })
                    .join('&')
    })
        .then(r => r.json())
        .then(data => {
            console.log(data);
        });
}; */



export default function About() {
    return (
        // <Layout>
        // <p>This is the about page</p>
        <button onClick={submit}>submit</button>
        // </Layout>
    );
}
