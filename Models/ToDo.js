const mongoose = require('mongoose');

main().catch(err => console.log('Connection Error:', err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/testDB');
  console.log('✅ Connected to MongoDB');
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, '❌ Connection Error:'));
db.once('open', () => console.log('🔗 Database Connected'));

const todoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});

module.exports = mongoose.model('ToDo', todoSchema);
// git merge --abort
