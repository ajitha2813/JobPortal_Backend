const connectDB = require('./Config/db');
const User = require('./Models/Users.Model');

const seedDatabase = async () => {
    try {
        await connectDB();

        // Optional: Clear the collection before seeding
        await User.deleteMany();

        // Add initial data
        const users = [
            { username: 'John Doe', email: 'john@example.com',password:'12345' },
            { username: 'Jane Smith', email: 'jane@example.com',password:'123459' },
        ];

        await User.insertMany(users);
        console.log('Database seeded successfully');

        process.exit(0); // Exit process with success
    } catch (err) {
        console.error(err.message);
        process.exit(1); // Exit process with failure
    }NavigationPreloadManagern
};

seedDatabase();
