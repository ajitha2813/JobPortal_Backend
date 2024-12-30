const Job = require('../Models/Job.Model');
const User = require('../Models/Users.Model');

const locationEnum = ['New York', 'Los Angeles', 'Chicago', 'San Francisco', 'Austin', 'Seattle'];

function getRandomLocation() {
    const randomIndex = Math.floor(Math.random() * locationEnum.length);
    return locationEnum[randomIndex];
}
exports.filterJobs = async (req, res) => {
    try {
        const { filterText } = req.body;  // Get the filter text from the request body

        // Initialize the query object
        const query = {};

        if (filterText) {
            // Use regular expressions for case-insensitive matching on location, company, and job title
            const regex = new RegExp(filterText, 'i'); // 'i' for case-insensitive matching

            // Add to the query for location, company, and title
            query.$or = [
                { location: { $regex: regex } },
                { company: { $regex: regex } },
                { title: { $regex: regex } }
            ];
        }

        // Fetch the filtered jobs from MongoDB
        const jobs = await Job.find(query);

        // Return the filtered jobs
        res.status(200).json(jobs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


exports.createJob = async (req, res) => {
    try {
        console.log(req.body);
        const createJOb = {
            title: req.body.title,
            description: req.body.description,
            location: getRandomLocation(),
            salary: req.body.salary,
        }
        const newJob = await Job.create(req.body);
        res.status(201).json(
            {
                isSuccess: true,
                message: 'Job created successfully',
                data: newJob
            }
        );
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Server error' });
    }
}

exports.saveJob = async (req, res) => {
try {
        console.log(req.body);
        const { jobId, userId } = req.body;
        const user = await User.findById(req.body.userId);

        const isJobSaved = user.saved_jobs.some((job)=>{
            
            return job._id == jobId.toString()
        })

        console.log(isJobSaved);
        if(isJobSaved){
            await User.findById(req.body.userId).updateOne({ $pull: { saved_jobs: jobId } });
            
            res.status(201).json(
                {
                    isSuccess: true,
                    message: 'Job unsaved successfully',
                    
                }
            );
        }
        else{
           
            await User.findById(req.body.userId).updateOne({ $push: { saved_jobs: jobId } });
            res.status(201).json(
                {
                    isSuccess: true,
                    message: 'Job saved successfully',
                 
                }
            );
        }
      
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Server error' });
    }
}

exports.getSavedJobs = async (req, res) => {
    try {
        console.log(req.body);
        const UserData = await User.findById(req.body.userId).populate('saved_jobs');
        const jobs = UserData.saved_jobs;
        res.status(201).json(
            {
                isSuccess: true,
                message: 'SavedJob fetched successfully',
                data: jobs
            }
        );
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Server error' });
    }
}
