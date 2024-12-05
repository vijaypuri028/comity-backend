import dbConnect from './dbConnect.js'
import { app } from './app.js'
import { authRouter } from './router/auth.router.js'
import { aboutRouter } from './router/about.router.js'
import { industryRouter } from './router/industry.router.js'
import { contactRouter } from './router/contact.router.js'
import { socialMediaRouter } from './router/socialMedia.router.js'
import { navRouter } from './router/navbar.router.js'
import { carouselRouter } from './router/carousel.router.js'
import dotenv from 'dotenv';
dotenv.config();

const PORT = 4000

app.use('/auth', authRouter)
app.use('/about', aboutRouter)
app.use('/industry', industryRouter)
app.use('/contact', contactRouter)
app.use('/socialmedia', socialMediaRouter)
app.use('/nav', navRouter)
app.use('/carousel', carouselRouter)

dbConnect()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on PORT: ${PORT}`);
    })
})
.catch( err => 
    console.log("MongoDB Connection failed...!", err)
)