function constructionCrew(workerData){
    let worker = {};
    worker.weight = workerData.weight;
    worker.experience = workerData.experience;
    worker.levelOfHydrated = workerData.levelOfHydrated;
    worker.dizziness = workerData.dizziness;
    if(worker.dizziness===true){
        worker.levelOfHydrated = 0.1*worker.weight*worker.experience;
        worker.dizziness = false;
    }
    return(worker);

//    weight: Number,
//   experience: Number,
//   levelOfHydrated: Number,
//   dizziness: Boolean     
}
constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  )