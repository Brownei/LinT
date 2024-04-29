/* eslint-disable react/prop-types */
import './LanguageIcons.scss'
import { Icon } from "@iconify/react";
// import { Link } from "react-router-dom";

const LanguageIcons = ({language, value}) => {
    let icon;
    switch (language) {
        case 'JavaScript':
            icon = <Icon icon={'devicon:javascript'} fontSize={22}/>
            break;
        case 'C++':
            icon = <Icon icon={'logos:c-plusplus'} fontSize={22}/>
            break;
        case 'Nest.js':
            icon = <Icon icon={'logos:nestjs'} fontSize={22}/>
            break;
        case 'C#':
            icon = <Icon icon={'vscode-icons:file-type-csharp2'} fontSize={22}/>
            break;
        case 'Python':
            icon = <Icon icon={'devicon:python'} fontSize={22}/>
            break;
        case 'Java':
            icon = <Icon icon={'devicon:java'} fontSize={22}/>
            break;
        case 'TypeScript':
            icon = <Icon icon={'devicon:typescript'} fontSize={22}/>
            break;
        case 'Ruby':
            icon = <Icon icon={'devicon:ruby'} fontSize={22}/>
            break;
        case 'Rust':
            icon = <Icon icon={'devicon:rust'} fontSize={22}/>
            break;
        case 'Swift':
            icon = <Icon icon={'devicon:swift'} fontSize={22}/>
            break;
        case 'Kotlin':
            icon = <Icon icon={'devicon:kotlin'} fontSize={22}/>
            break;
        case 'Go':
            icon = <Icon icon={'skill-icons:golang'} fontSize={22}/>
            break;
        case 'PHP':
            icon = <Icon icon={'devicon:php'} fontSize={22}/>
            break;
        case 'HTML':
            icon = <Icon icon={'logos:html-5'} fontSize={22}/>
            break;
        case 'CSS':
            icon = <Icon icon={'logos:css-3'} fontSize={22}/>
            break;
        case 'SQL':
            icon = <Icon icon={'devicon:mysql'} fontSize={22}/>
            break;
        case 'Scala':
            icon = <Icon icon={'devicon:scala'} fontSize={22}/>
            break;
        case 'Dart':
            icon = <Icon icon={'devicon:dart'} fontSize={22}/>
            break;
        case 'R':
            icon = <Icon icon={'devicon:r'} fontSize={22}/>
            break;
        case 'React':
            icon = <Icon icon={'devicon:react'} fontSize={22}/>
            break;
        case 'Angular':
            icon = <Icon icon={'devicon:angular'} fontSize={22}/>
            break;
        case 'Vue.js':
            icon = <Icon icon={'devicon:vuejs'} fontSize={22}/>
            break;
        case 'jQuery':
            icon = <Icon icon={'devicon:jquery'} fontSize={22}/>
            break;
        case 'Bootstrap':
            icon = <Icon icon={'devicon:bootstrap'} fontSize={22}/>
            break;
        case 'Tailwind CSS':
            icon = <Icon icon={'devicon:tailwindcss'} fontSize={22}/>
            break;
        case 'Sass':
            icon = <Icon icon={'devicon:sass'} fontSize={22}/>
            break;
        case 'Wordpress':
            icon = <Icon icon={'skill-icons:wordpress'} fontSize={22}/>
            break;
        case 'Less':
            icon = <Icon icon={'bxl:less'} fontSize={22}/>
            break;
        case 'Ember.js':
            icon = <Icon icon={'devicon:ember'} fontSize={22}/>
            break;
        case 'Node.js':
            icon = <Icon icon={'devicon:nodejs'} fontSize={22}/>
            break;
        case 'Express.js':
            icon = <Icon icon={'devicon:express'} fontSize={22}/>
            break;
        case 'Django':
            icon = <Icon icon={'vscode-icons:file-type-django'} fontSize={22}/>
            break;
        case 'Flask':
            icon = <Icon icon={'devicon:flask'} fontSize={22}/>
            break;
        case 'Spring Boot':
            icon = <Icon icon={'devicon:spring'} fontSize={22}/>
            break;
        case 'Laravel':
            icon = <Icon icon={'devicon:laravel'} fontSize={22}/>
            break;
        case 'Next.js':
            icon = <Icon icon={'devicon:nextjs'} fontSize={22}/>
            break;
        case 'Remix':
            icon = <Icon icon={'skill-icons:remix-light'} fontSize={22}/>
            break;
        case 'Symfony':
            icon = <Icon icon={'devicon:symfony'} fontSize={22}/>
            break;
        case 'FastAPI':
            icon = <Icon icon={'devicon:fastapi'} fontSize={22}/>
            break;
        case 'React Native':
            icon = <Icon icon={'devicon:react'} fontSize={22}/>
            break;
        case 'Flutter':
            icon = <Icon icon={'devicon:flutter'} fontSize={22}/>
            break;
        case 'MySQL':
            icon = <Icon icon={'devicon:mysql'} fontSize={22}/>
            break;
        case 'PostgreSQL':
            icon = <Icon icon={'devicon:postgresql'} fontSize={22}/>
            break;
        case 'MongoDB':
            icon = <Icon icon={'devicon:mongodb'} fontSize={22}/>
            break;
        case 'SQLite':
            icon = <Icon icon={'devicon:sqlite'} fontSize={22}/>
            break;
        case 'Redis':
            icon = <Icon icon={'devicon:redis'} fontSize={22}/>
            break;
        case 'Git':
            icon = <Icon icon={'devicon:git'} fontSize={22}/>
            break;
        case 'GitHub':
            icon = <Icon icon={'devicon:github'} fontSize={22}/>
            break;
        case 'GitLab':
            icon = <Icon icon={'devicon:gitlab'} fontSize={22}/>
            break;
        case 'Bitbucket':
            icon = <Icon icon={'devicon:bitbucket'} fontSize={22}/>
            break;
        case 'Adobe Photoshop':
            icon = <Icon icon={'logos:adobe-photoshop'} fontSize={22}/>
            break;
        case 'Adobe Illustrator':
            icon = <Icon icon={'logos:adobe-illustrator'} fontSize={22}/>
            break;
        case 'Sketch':
            icon = <Icon icon={'logos:sketch'} fontSize={22}/>
            break;
        case 'Figma':
            icon = <Icon icon={'devicon:figma'} fontSize={22}/>
            break;
        case 'Adobe XD':
            icon = <Icon icon={'logos:adobe-xd'} fontSize={22}/>
            break;
        case 'InVision':
            icon = <Icon icon={'logos:invision-icon'} fontSize={22}/>
            break;
        case 'Canva':
            icon = <Icon icon={'devicon:canva'} fontSize={22}/>
            break;
        case 'Material-UI':
            icon = <Icon icon={'logos:material-ui'} fontSize={22}/>
            break;
        case 'Ant Design':
            icon = <Icon icon={'logos:ant-design'} fontSize={22}/>
            break;
        case 'Chakra UI':
            icon = <Icon icon={'devicon:chakraui'} fontSize={22}/>
            break;
        case 'Semantic UI':
            icon = <Icon icon={'logos:semantic-ui'} fontSize={22}/>
            break;
        case 'Postman':
            icon = <Icon icon={'devicon:postman'} fontSize={22}/>
            break;
        case 'Docker':
            icon = <Icon icon={'devicon:docker'} fontSize={22}/>
            break;
        case 'Kubernetes':
            icon = <Icon icon={'devicon:kubernetes'} fontSize={22}/>
            break;
        case 'Jenkins':
            icon = <Icon icon={'devicon:jenkins'} fontSize={22}/>
            break;
        case 'Heroku':
            icon = <Icon icon={'devicon:heroku'} fontSize={22}/>
            break;
        case 'Netlify':
            icon = <Icon icon={'devicon:netlify'} fontSize={22}/>
            break;
        case 'Vercel':
            icon = <Icon icon={'devicon:vercel'} fontSize={22}/>
            break;
        case 'AWS':
            icon = <Icon icon={'logos:aws'} fontSize={22}/>
            break;
        case 'Azure':
            icon = <Icon icon={'devicon:azure'} fontSize={22}/>
            break;
        case 'Microsoft Teams':
            icon = <Icon icon={'logos:microsoft-teams'} fontSize={22}/>
            break;
        case 'Slack':
            icon = <Icon icon={'logos:slack-icon'} fontSize={22}/>
            break;
        case 'Trello':
            icon = <Icon icon={'devicon:trello'} fontSize={22}/>
            break;
        case 'Jira':
            icon = <Icon icon={'devicon:jira-wordmark'} fontSize={22}/>
            break;
        case 'Notion':
            icon = <Icon icon={'devicon:notion'} fontSize={22}/>
            break;
        default:
            icon = <Icon icon={'file-icons:default'} fontSize={22}/>
            break;
    }

    return (
        <div className={'style'}>
            <div className='icon'>
                {icon}
                <span>{language}</span>
            </div>
            {value?.includes(language) ? <Icon icon={'mdi:tick'} fontSize={15}/> : <Icon icon={'ic:baseline-plus'} fontSize={15}/>}
        </div>
    )
}

export default LanguageIcons
