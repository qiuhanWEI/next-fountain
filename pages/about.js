import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

const submit = () => {
    // fetch("http://47.97.118.7:3001/sendemail")
    fetch("http://localhost:3001/sendemail", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ name: 'test1018' })
    })
        .then(r => r.text())
        .then(data => {
            console.log(data);
        });
};

export default function About() {
    return (
        // <Layout>
            // <p>This is the about page</p>
            <button onClick={submit}>submit</button>
        // </Layout>
    );
}
