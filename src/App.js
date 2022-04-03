import React, { useState , useEffect } from 'react';
import Plan from './Plan';
import PlanService from "./services";


function App() {
  const [plan, setPlan] = useState("");
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    getPlans();
  }, [])

  const getPlans = async() =>{
    const data = await PlanService.getAllPlans();
    setPlans(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
  }


  const createPlan = (inputPlan) =>{
    if(plan === ""){
      alert("Enter the Todo");
    }
    const newPlan = {
      plan
    }

    try{
      PlanService.addPlan(newPlan);
    }
    catch(err){
      alert(err.message);
    }

    setPlan("");
    getPlans();
  }


  const handleDelete = async(index) =>{
    await PlanService.deletePlan(index);
    getPlans();
  }



  return (
    <>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto bg-white text-black shadow-lg p-3">
            <h1 className="text-center"> Today's Plan</h1>
            <div className="row">
              <div className="col-9">
                <input type="text" value={plan} onChange={(event)=> setPlan(event.target.value)} className='form-control' name="" id="" placeholder='Write Plan Here...'/>
              </div>
              
              <div className="col-2">
                <button className="btn btn-primary px-3 fw-bold" onClick={createPlan}>Add</button>
              </div>
            </div>
            <div className="container">
              <ul className="list-unstyled row my-5">
                  {plans.map((curEle, index)=>{
                  return<Plan key={index} item = {curEle.plan} id = {curEle.id} sendDelete = {handleDelete}/>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App