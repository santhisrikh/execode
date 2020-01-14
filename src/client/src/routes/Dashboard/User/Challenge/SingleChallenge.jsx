import React from 'react'
import AceEditor from "react-ace";

class SingleChallenge extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                code:'',
                ar:[],
                runcode:false,
                test0:false,
                dummy_challenge_data:[
                    {
                        "description":"There is a long waiting line of integers waiting for their turn to buy ticket for a cricket match. ",
                        "problem_statement":"Waiting Line",
                        "input_format":"First line consists of a single integer denoting N \n Each of the following N lines contain one of the operation as described above.",
                        "output_format":"For each enqueue operation print the new size of the queue. \n And for each dequeue operation print two integers, deleted element (-1, if queue is empty) and the new size of the queue.",
                        "constraints":"1<=N<=100 ",
                        "difficulty":"Easy",
                        "sample_input":` 5 \n E 2 \n D \n D \n E 3 \n D `,
                        "sample_output":"1 \n 2 0 \n -1 0 \n 1 \n 3 0",
                        "marks":"20"
                    }
                ]
        }
    }
   
    onChange(e,v) { 
        let str  = e
        console.log(str)
        this.setState({
            code:str
        })
    }

    // RUN CODE
    run() {
        console.log(this.state)
        this.setState({
            runcode: true
        })
    }

    // SUBMIT CODE
    submit(){
        this.setState({
            test0: !this.state.test0
        })
    }
        copy() {
            alert("dont copy")
        }
    render() {
       let challenge_detail = this.state.dummy_challenge_data.map(a=>{
           return <div>
               <p>{a.description}</p>
               <div>
                   
                   <h5>Input Format</h5>
                   <p>{a.input_format}</p>
                   <h5>Constraints</h5>
                   <p>{a.constraints}</p>
                   <h5>Output Format</h5>
                   <p>{a.output_format}</p>
                   <h5>Marks</h5>
                   <p>{a.marks}</p>
                   <h5>Sample Input 0</h5>
                   <pre style={{"backgroundColor":"whitesmoke"}}>{a.sample_input}</pre>
                   <h5>Sample Output 0</h5>
                   <pre  style={{"backgroundColor":"whitesmoke"}}>{a.sample_output}</pre>
               </div>
           </div>
       })
        return (
            <div className="container border">
                <h1 className="text-left">{this.state.dummy_challenge_data[0].problem_statement}</h1>
                <div className="col-xl-8 text-left">
                    {challenge_detail}
                </div>
                
                <div className="col-xl-12 ">
                <div className="justify-content-end">
                    <select >
                        <option>Python</option>
                        <option>Javascript</option>
                    </select>
                </div>
                <AceEditor
                    mode="python"
                    className="col-xl-12 "
                    theme="github"
                    value={this.state.code}
                    onCopy={() => this.copy()}
                    onChange={(e, v) => this.onChange(e, v)}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                />
                </div>
                
                <div className="text-center col-xl-12 mt-2 text-left row">
                    <button className="btn btn-warning" onClick={()=>this.run()}>Run Code</button>
                    <button className="btn btn-success ml-3"  onClick={()=>this.submit()}>Submit Code</button>
                </div>
                
                {/* // Section for runcode */}
                
                {this.state.runcode ? (
                        <div>
                        <h5 className="text-left mt-4">Sample Input 0</h5>
                        <div className="col-xl-1">
                            <pre className="text-left">
                                {this.state.dummy_challenge_data[0].sample_input}
                            </pre>
                        </div>
                        {this.state.test0 ? (
                        <div>
                            <h4 className="text-success text-left">Sample TestCase Passed</h4>
                        </div>
                        ) : (
                        <div>
                            <h4 className="text-danger text-left">Sample TestCase Fail</h4>
                        </div>
                        )}
                        <h5 className="text-left mt-4">Sample Output 0</h5>
                        <div className="col-xl-1">
                            <pre className="text-left">
                                {this.state.dummy_challenge_data[0].sample_output}
                            </pre>
                        </div>
                    </div>
                ) : ('')}
                
                
            </div>
        )
    }
}

export default SingleChallenge