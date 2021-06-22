import faker from 'faker'
import db from '../db/connections.js'
import Post from '../models/post.js'

const insertData = async () => {
    await db.dropDatabase()

    const posts = [...Array(20)].map(post => {
        return {
            author: {
                name: faker.person.name(),
                email: faker.internet.email(),
                bio: faker.lorem.sentence()
            },
            content: {
                title: faker.sentence(nb_words = 5),
                body: faker.lorem.paragraphs(nb = 3),
                publishDate: faker.date.past()
            }
        }
    })
    await Post.insertMany(posts)
    console.log('Created posts!')

    db.close()
}

insertData()

