const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes/api'); // This now includes categoryRoutes, productRoutes, and tagRoutes

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes); // Use the centralized routes


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
}).catch(err => {
    console.error('Failed to sync db: ' + err.message);
});

