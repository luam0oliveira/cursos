const express = require('express')
const app = express()
const port = 8080

app.set('view engine', 'ejs')

// // Tools to list pages
// const path = require('path')
// const fs = require('fs')
// const pages = fs.readdirSync('views/pages/')

// let routes = [] 

// for(const page of pages){
//     const extension = path.extname(page)
    
//     routes.push(path.basename(page, extension))
// }

// List pages
// Home page
app.get('/', (req,res) => {
    res.render('index', {
        titlePage: "Página inicial",
        description: "Página inicial do site"  
    })
})

app.get('/about', (req,res) => {
    const content = [
        {
            title: "Fundação",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis nec velit aliquam dictum. Mauris quis felis pharetra, pretium augue sed, sollicitudin diam. Etiam volutpat, quam eu malesuada congue, lacus felis sagittis turpis, non accumsan massa elit vitae lacus. Fusce ex ante, vehicula eu mauris at, vehicula lobortis orci. Sed pellentesque, justo ut bibendum malesuada, magna nibh pharetra nibh, a tincidunt ipsum ligula ac ipsum. Praesent blandit nunc urna, quis mollis orci imperdiet nec. Integer auctor eget urna ut ultrices. Pellentesque lacinia ullamcorper mattis. Donec a purus pretium, vulputate ex at, condimentum sem. Maecenas suscipit lorem sit amet sem hendrerit, sit amet venenatis ex pulvinar. In pharetra dolor magna, eu viverra est lobortis eu."
        },
        {
            title: "Família Navbar",
            text: "Nulla sollicitudin auctor ante, vitae commodo dui. Vivamus gravida dui massa, at commodo massa rutrum at. Sed luctus lobortis nunc in aliquam. Vivamus scelerisque nisl velit, vel tincidunt neque hendrerit sagittis. Cras sed suscipit dui. Aenean eu rhoncus purus, sed consequat augue. Proin eget odio vel arcu dignissim elementum non eu quam. Integer tincidunt sollicitudin eros, a malesuada justo bibendum sit amet. Pellentesque consequat magna at purus fermentum dignissim. Quisque non venenatis urna. Vivamus at elementum sem. In luctus nisl non diam consequat, fringilla hendrerit nisi lobortis. Morbi ac felis sed nulla ornare pellentesque ut vel magna. Phasellus sodales sagittis massa, non blandit mi pulvinar vehicula. Phasellus a ex in tellus eleifend dignissim. Curabitur faucibus, lorem porttitor tincidunt venenatis, justo nulla consectetur nibh, eu ornare lacus diam convallis sapien.Nulla sollicitudin auctor ante, vitae commodo dui. Vivamus gravida dui massa, at commodo massa rutrum at. Sed luctus lobortis nunc in aliquam. Vivamus scelerisque nisl velit, vel tincidunt neque hendrerit sagittis. Cras sed suscipit dui. Aenean eu rhoncus purus, sed consequat augue. Proin eget odio vel arcu dignissim elementum non eu quam. Integer tincidunt sollicitudin eros, a malesuada justo bibendum sit amet. Pellentesque consequat magna at purus fermentum dignissim. Quisque non venenatis urna. Vivamus at elementum sem. In luctus nisl non diam consequat, fringilla hendrerit nisi lobortis. Morbi ac felis sed nulla ornare pellentesque ut vel magna. Phasellus sodales sagittis massa, non blandit mi pulvinar vehicula. Phasellus a ex in tellus eleifend dignissim. Curabitur faucibus, lorem porttitor tincidunt venenatis, justo nulla consectetur nibh, eu ornare lacus diam convallis sapien."
        },
        {
            title: "Missão",
            text: "Nulla in libero ut tortor posuere volutpat. Suspendisse placerat leo euismod pharetra posuere. Vivamus in convallis diam. Vivamus non libero justo. Aenean interdum non sem sit amet tempus. Vestibulum dictum et augue ut consequat. Suspendisse potenti."
        }
    ]

    res.render('pages/about', {
        titlePage: "Sobre nós",
        description: "Página que apresenta uma breve história da empresa",
        title: "Sobre nós",
        subtitle: "Somos uma empresa focada em tecnologia que tem o foco em desenvolver histórias",
        contents: content
    })
})

// // Other pages
// routes.forEach((page) => {
//     app.get(`/${page}`, (req,res) => {
//         res.render(`pages/${page}`,{ 
            
//         })
//     })
// })

app.listen(port)