const stateModel = require("../Models/state");
const cityModel = require("../Models/city");
const kendraModel = require("../Models/Kendra");
const User = require("../Models/user");
const JWT_SECRET = "CENTRALIZED@NASHA@MUKTI@DATABASE"




const addKendraController = async(req, res)=>{
    try {
        // console.log(req.body);
        const {state, city,kendraName,address, description, image, phone, email, website, link, coordinates} = req.body;
        if(state==="" || city === "" || kendraName === "" || address === "" || description === "" || phone === "" ){
            return res.status(400).send({msg :" Plz enter complete details or missing data"})
        }
        const newState = convertToTitleCase(state);
        
        const isStateFound = await stateModel.findOne({state:newState});
        const newCity = convertToTitleCase(city);
        const newKendraName = convertToTitleCase(kendraName);
        if(isStateFound != null){
            
            const isCityFound = await cityModel.findOne({cityName:newCity, state:isStateFound._id});
            
            if(isCityFound != null) {
                console.log("I found the city exist")
                
                    moduleToCreateKendra(isCityFound._id, newKendraName, address, description, image, phone, email, website, link, coordinates)
                    .then((savedKendra)=>{
                        return res.status(201).send(savedKendra);
                    }).catch((error)=>{
                        return res.status(500).send(error);
                    })
                
            } else {
                console.log("I found city doesn't exist new will be created");
                moduleToCreateCity(isStateFound._id, newCity)  
                .then((savedCity)=>{
                    console.log("I am creating new kendra realted to that city " +savedCity.cityName )
                    moduleToCreateKendra(savedCity._id, newKendraName, address, description, image, phone, email, website, link, coordinates)
                    .then((savedKendra)=>{
                        res.status(201).send(savedKendra);
                    }).catch((error)=>{
                        res.status(500).send(error);
                    })
                }).catch((error)=>{
                    res.status(500).send({msg: "city can not be formed", error});
                })               
            }
        } else {
            console.log("this is a new state...all new data will be generated")
            moduleToCreateState(newState)
            .then((savedState)=>{
                
                moduleToCreateCity(savedState._id, newCity)  
                .then((savedCity)=>{
                    // console.log(savedCity)
                    moduleToCreateKendra(savedCity._id, newKendraName, address, description, image, phone, email, website, link, coordinates)
                    .then((savedKendra)=>{
                        // console.log(savedKendra)
                        return res.status(201).send(savedKendra);
                    }).catch((error)=>{
                        return res.status(500).send(error);
                    })
                }).catch((error)=>{
                    res.status(500).send(error);
                }) 
            })
        }
    } catch (error) {
        console.log({error});
    }
}

const getAllState = async(req, res)=>{
    try {
        const states = await stateModel.find();
        if(states === null) {
            return res.status(404).send({msg:"No state added yet"});
        } 
        return res.status(200).send(states);
    } catch (error) {
        console.log({error:error});
        return res.status(500).send({msg:"Internal server error"});
    }
}

const getAllCity = async(req, res)=>{

    try {
        const {state} = req.body;
    if(state === "") 
        return res.status(400).send({msg:"Please provide State Name"})
    
        const newState = convertToTitleCase(state);
        const stateFound = await stateModel.findOne({state:newState});
        if(stateFound === null) {
            return res.status(404).send({msg:` We don't have data about ${newState} state`})
        } else { 
            const cityfound = await cityModel.find({state:stateFound._id});
            if(cityfound === null) 
            return res.status(404).send({msg:`We don't have data of any city of ${newState}`})
            else 
            return res.status(200).send(cityfound);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({error:"Interval server error"})
    }

    
}

const getAllKendra = async(req, res)=>{


    try {
        const {state, city} = req.body;
    if(state === "" && city === ""){
        return res.status(400).send({msg:"Please provide city and state"})
    } else if(state === ""){
        return res.status(400).send({msg:"Please provide State name"});
    }else if(city === ""){
        return res.status(400).send({msg:"Please provide State name"});
    }
    const newState = convertToTitleCase(state);
    const stateFound = await stateModel.findOne({state:newState});
    if(stateFound === null) {
        return res.status(404).send({msg:` We don't have data about ${newState} `})
    } else {
        const newCity = convertToTitleCase(city);
        const cityfound = await cityModel.findOne({cityName:newCity});
        if(cityfound === null) {
            return res.status(404).send({msg:` We don't have data about ${newCity} city`})
        } else {
    
            const kendrasFound = await kendraModel.find({city:cityfound._id});
            if(kendrasFound === null){
                return res.status(404).send({msg:` Kendras not yet added of ${newCity} city`})
            } else {
                return res.status(200).send({kendrasFound});
            }
        }
    }
    } catch (error) {
        console.log({error:error});
        return res.status(500).send({ msg: "An internal server error occurred" });
    }

    
}

const updateKendraController = async(req, res)=>{
    try {
      
    const result = await kendraModel({ _id: req.query.id }, { $set: req.body }, {new :true});

    if (result) {
      // The document was updated successfully
      res.status(200).json({ message: "Document updated successfully" });
    } else {
      // No document was updated (document with the given ID not found)
      res.status(404).json({ message: "Document not found" });
    }
    } catch (error) {
        console.log(error);
    }
}

const updateCityController = async(req, res)=>{
    try {
        const {newCity, oldCity} = req.body;
        if(newCity === "" || oldCity === "" ) {return res.status(400).send({msg:"Missing data"})}
        const name = convertToTitleCase(newCity);
        const result = await cityModel.findOneAndUpdate({ cityName: oldCity }, { cityName: name }, {new:true});
         if (result) {
          // The document was updated successfully
          res.status(200).json({ message: "Document updated successfully", document: result});
        } else {
          // No document was updated (document with the given ID not found)
          res.status(404).json({ message: "Document not found", document: result });
        }
        } catch (error) {
            console.log(error);
        }
}

const updateStateController = async(req, res)=>{
    try {
        const {oldState, newState} = req.body;
        if(oldState === "" || newState === "" ){return res.status(400).send({msg:"Missing data"})};
        const name = convertToTitleCase(newState);
        const result = await stateModel.findOneAndUpdate({ state: oldState }, {state: name }, {new:true});
        if (result) {
          // The document was updated successfully
          return res.status(200).json({ message: "Document updated successfully", document: result});
        } else {
          // No document was updated (document with the given ID not found)
          return res.status(404).json({ message: "Document not found", document: result });
        }
        } catch (error) {
            console.log(error);
        }
}

const deleteKendraController = async(req, res)=>{
    try {
        const kendra = await kendraModel.findOne({_id:req.query.id});
        if(kendra){
            await kendraModel.deleteOne({_id:req.params.id}).then((res)=>{
                console.log("kendra deleted")
                res.status(200).send(res)
            }).catch((error)=>{
                console.log("Problem in deleted kendra")
                res.status(400).send(error);
            })

        } else {
            res.status(404).send({msg:"Given kendra not found"})
        }
        
    } catch (error) {
        console.log({msg:error})
    }
}

const moduleToCreateKendra = async(city_id,newKendraName, address, description, image, phone, email, website, link, coordinates)=>{
    try {
        const kendraCreate = new kendraModel({
            city:city_id,
            Name:newKendraName,
            address:address,
            description:description,
            image:image, 
            contactInfo:{
                phone:phone, 
                email:email,
                website:website
            }, 
            location:{
                link:link, 
                coordinates:coordinates
            }
        })
        const savedKendra = await kendraCreate.save();
        return savedKendra;
    } catch (error) {
        console.log({msg:error})
    }
}

const moduleToCreateCity = async(state_id, newCity)=>{

    try {
        const cityCreate = new cityModel({
            state:state_id,
            cityName:newCity
        });
        const savedCity = await cityCreate.save();
        return savedCity;
    } catch (error) {
        console.log({msg:error});
    }

}

const moduleToCreateState = async(newState)=>{
    try {
        const stateCreate = new stateModel({
            state:newState,
        });
        const savedState = await stateCreate.save();
        console.log("object")
        // console.log(savedState)
        return savedState;
    } catch (error) {
        console.log({msg:error});
    }
    
}

function convertToTitleCase(inputString) {
   
    const words = inputString.split(' ');
    const modifiedWords = [];
  
    for (const word of words) {
      const modifiedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      modifiedWords.push(modifiedWord);
    }
    const result = modifiedWords.join(' ');
    return result.toString();
}

module.exports = {
      addKendraController, 
    updateKendraController,
    updateCityController,
    updateStateController,
    deleteKendraController,
    getAllKendra,
    getAllCity,
    getAllState
};