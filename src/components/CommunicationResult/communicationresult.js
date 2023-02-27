import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import img from "../micro-logo.png";
import { Link } from 'react-router-dom';
import './commuicationresult.css'

import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Katresult() {
    const { studentsProgressDetailsId } = useParams();
    const [products, setProducts] = useState([]);
    console.log(studentsProgressDetailsId)
  useEffect(() => {
      fetchProducts();
    }, []);
    const fetchProducts = () => {
      axios
        .get("http://192.168.253.177:8080/kgm/get/null/marks")
        .then((res) => {
          console.log(res);
          setProducts(res.data.jData);

        })
        .catch((err) => {
          console.log(err);
        });
       
    };
    const handlesubmit = async (studentsProgressDetailsId,communication) => {
        
        var communication = document.getElementById("communication").value;
        if (communication === '' || communication === null) {
            alert("select your communication");
        }
        
        else {
            await axios.post("http://192.168.253.177:8080/kgm/update/marks",{"studentsProgressDetailsId":studentsProgressDetailsId,"updatedBy":"john","communication":communication})
            .then(function (res){
                console.log(res)
                if (res.data.responseMsg === 'failure') {
                    alert('failure');
                    window.location.reload();
                }
                else if (res.data.responseMsg === 'success') {
                    alert("success");
                    window.location.href = "./communicationstaff";

                }
            })
        // await axios.post("http://192.168.253.177:8080/kgm/update/marks",{"studentsProgressDetailsId":1,"updatedBy":"john","communication":communication})
        //     .then(function (res) {
        //         if (res.data.responseMsg === 'error') {
        //             alert("error");
        //             window.location.reload();
        //         }
        //         else if (res.data.responseMsg === 'success') {
        //             alert('Data successfully update');
        //             window.location.reload();
        //         }
        //     })
            .catch(function (error) {
                alert(error);
                window.location.reload();
            })
        }
    }

    return (
        <>
            <div className='container-fluid'>
                <h1 className='text-center p-5'>KAT Result</h1>

                <table className='container-fluid'>
                    <thead>

                        <tr>
                            <th rowspan="3">S.No</th>
                            <th rowspan="3">Name</th>
                            <th colspan="7" className='text-center'>Score</th>
                            <th rowSpan="3" className='text-center'>Action</th>
                        </tr>
                        <tr>
                            <th colspan="3" className='text-center'>Numerical ability</th>
                            <th colspan="3" className='text-center'>Verbal ability</th>
                            <th rowSpan="2">Communication</th>
                        </tr>
                        <tr>
                            <th>Basic</th>
                            <th>Intermediate</th>
                            <th>Advance</th>
                            <th>Basic</th>
                            <th>Intermediate</th>
                            <th>Advance</th>
                        
                        </tr>
                    </thead>
                    {products.map((value,index)=>(

                        <tbody>

                        <tr>
                            <td>{value.studentsProgressDetailsId}</td>
                            <td>{value.firstName}{value.lastName}</td>
                            <td>{value.numericBasic}</td>
                            <td>{value.numericIntermediate}</td>
                            <td>{value.numericAdvanced}</td>
                            <td>{value.verbalBasic}</td>
                            <td>{value.verbalIntermediate}</td>
                            <td>{value.verbalAdvanced}</td>
                            <td>
                                <select name="communication"  id="communication">
                                    <option value="" className='text-center'>Select the option</option>
                                    <option value="Trainable">Trainable</option>
                                    <option value="Non-Trainable">Non-Trainable</option> 
                                    <option value="Interviewable">Interviewable</option>
                                </select>
                            </td>
                            <td> <button className='btn btn-success'onClick={() => handlesubmit(value.studentsProgressDetailsId)}>Submit</button></td>
                        </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </>
    );
}