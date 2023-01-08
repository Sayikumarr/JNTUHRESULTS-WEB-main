import SingleResults from '../components/Single/SingleResults';
import url from '../components/api/api';
import axios from 'axios';
const single = ({ query }) => {

    return ( <
        >
        <
        SingleResults query = { query }
        /> <
        />
    )
}
export default single;

export async function getServerSideProps(context) {
    const htno = context.query.htno;
    const response = await axios.get(url + '/api/single?htno=' + htno);
    var fs = require('fs');

    // Use readFileSync() method

    // Store the result (return value) of this
    // method in a variable named readMe

    // Keep the file in the same folder so
    // donot need to specify the complete path
    var readMe = fs.readFileSync("whole_cls_results_data.json");

    // log the content of file stored in
    // a variable to screen
    console.log(readMe);

    return {
        props: { query: await response.data }, // will be passed to the page component as props
    }
}