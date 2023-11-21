import './Home.scss'
import CardComponent from "../../components/Card/CardComponent";
import { Link, useSearchParams } from 'react-router-dom';

const Home = () => {
  const pathname = useSearchParams()
  const users = [
      {
        id: 1,
        name: "Udofiah Gift",
        profession: "Lead Front-end Developer",
        timestamp: "15 mins",
        post: {
          title: "How to write React",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
        }
      },
      {
        id: 2,
        name: "Udofiah Gift",
        profession: "Lead Front-end Developer",
        timestamp: "15 mins",
        post: {
          title: "How to write React",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
        }
      },
      {
        id: 3,
        name: "Udofiah Gift",
        profession: "Lead Front-end Developer",
        timestamp: "15 mins",
        post: {
          title: "How to write React",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
        }
      },
      {
        id: 4,
        name: "Udofiah Gift",
        profession: "Lead Front-end Developer",
        timestamp: "15 mins",
        post: {
          title: "How to write React",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
        }
      },
      {
        id: 5,
        name: "Udofiah Gift",
        profession: "Lead Front-end Developer",
        timestamp: "15 mins",
        post: {
          title: "How to write React",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
        }
      },
      {
        id: 6,
        name: "Udofiah Gift",
        profession: "Lead Front-end Developer",
        timestamp: "15 mins",
        post: {
          title: "How to write React",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
        }
      },
      {
        id: 7,
        name: "Udofiah Gift",
        profession: "Lead Front-end Developer",
        timestamp: "15 mins",
        post: {
          title: "How to write React",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
        }
      },
      {
        id: 8,
        name: "Udofiah Gift",
        profession: "Lead Front-end Developer",
        timestamp: "15 mins",
        post: {
          title: "How to write React",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
        }
      }
  ]

  const community = [
      {
        name: "Ayati John",
        profession: "Lead Front-end Developer",
        timestamp: "15 mins",
        post: {
          title: "Community!!",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
        }
      },
      {
        name: "Ayati John",
        profession: "Lead Front-end Developer",
        timestamp: "15 mins",
        post: {
          title: "Community!!",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
        }
      },
      {
        name: "Ayati John",
        profession: "Lead Front-end Developer",
        timestamp: "15 mins",
        post: {
          title: "Community!!",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
        }
      },
      {
        name: "Ayati John",
        profession: "Lead Front-end Developer",
        timestamp: "15 mins",
        post: {
          title: "Community!!",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
        }
      },
      {
        name: "Ayati John",
        profession: "Lead Front-end Developer",
        timestamp: "15 mins",
        post: {
          title: "Community!!",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
        }
      },
      {
        name: "Ayati John",
        profession: "Lead Front-end Developer",
        timestamp: "15 mins",
        post: {
          title: "Community!!",
          description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, aperiam distinctio officiis sunt vitae soluta tempora quod deleniti accusamus vero nihil."
        }
      },
  ]

  // console.log(pathname[0].has('params'))

  return (
        <div id="homes">
            <div className="h-container">
              <Link to='/' className={pathname[0].has('params') === false ? 'selected' : 'element'}>For you</Link>
              <Link to='/?params=following' className={pathname[0].get('params') === 'following' ? 'selected' : 'element'}>Following</Link>
              <Link to='/?params=community' className={pathname[0].get('params') === 'community' ? 'selected' : 'element'}>Community</Link>
            </div>
            <div className="circleplus">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 48 49" fill="none" >
                <circle cx="24" cy="24.25" r="24" fill="#939393" />
              </svg>
              <div className="share">
                <textarea type="text" placeholder="Share your thoughts"/>
              </div>
            </div>
            <div className="under">
                <div className="box1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                      <path d="M6.75004 14.819H10.9167C11.1528 14.819 11.3509 14.739 11.5109 14.579C11.6709 14.419 11.7506 14.2212 11.75 13.9857C11.75 13.7496 11.67 13.5515 11.51 13.3915C11.35 13.2315 11.1523 13.1518 10.9167 13.1523H6.75004C6.51393 13.1523 6.31588 13.2323 6.15588 13.3923C5.99588 13.5523 5.91615 13.7501 5.91671 13.9857C5.91671 14.2218 5.99671 14.4198 6.15671 14.5798C6.31671 14.7398 6.51449 14.8196 6.75004 14.819ZM6.75004 11.4857H13.4167C13.6528 11.4857 13.8509 11.4057 14.0109 11.2457C14.1709 11.0857 14.2506 10.8879 14.25 10.6523C14.25 10.4162 14.17 10.2182 14.01 10.0582C13.85 9.89818 13.6523 9.81846 13.4167 9.81901H6.75004C6.51393 9.81901 6.31588 9.89901 6.15588 10.059C5.99588 10.219 5.91615 10.4168 5.91671 10.6523C5.91671 10.8885 5.99671 11.0865 6.15671 11.2465C6.31671 11.4065 6.51449 11.4862 6.75004 11.4857ZM6.75004 8.15235H13.4167C13.6528 8.15235 13.8509 8.07235 14.0109 7.91234C14.1709 7.75235 14.2506 7.55457 14.25 7.31901C14.25 7.0829 14.17 6.88485 14.01 6.72485C13.85 6.56485 13.6523 6.48512 13.4167 6.48568H6.75004C6.51393 6.48568 6.31588 6.56568 6.15588 6.72568C5.99588 6.88568 5.91615 7.08346 5.91671 7.31901C5.91671 7.55512 5.99671 7.75318 6.15671 7.91318C6.31671 8.07318 6.51449 8.1529 6.75004 8.15235ZM4.25004 18.1523C3.79171 18.1523 3.39921 17.989 3.07254 17.6623C2.74588 17.3357 2.58282 16.9435 2.58338 16.4857V4.81901C2.58338 4.36068 2.74671 3.96818 3.07338 3.64151C3.40004 3.31485 3.79226 3.15179 4.25004 3.15235H15.9167C16.375 3.15235 16.7675 3.31568 17.0942 3.64235C17.4209 3.96901 17.5839 4.36123 17.5834 4.81901V16.4857C17.5834 16.944 17.42 17.3365 17.0934 17.6632C16.7667 17.9898 16.3745 18.1529 15.9167 18.1523H4.25004ZM4.25004 16.4857H15.9167V4.81901H4.25004V16.4857Z" fill="#939393"/>
                  </svg>
                  <span>Write article</span>
                </div>
                <button className="box2">Post</button>
            </div>

              {/* SEPERATOR */}
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="610" height="2" viewBox="0 0 648 2" fill="none">
                <path d="M0 1.48438H648" stroke="#DBDBDB"/>
              </svg>
            </div>

            {/* CARD COMPONENTS */}
            {pathname[0].get('params') === 'community' && (
              <div>
                {users.map((user, index) => (
                  <div key={index}>
                    <CardComponent user={user}/>
                  </div>
                ))}
              </div>
            )}

            {pathname[0].get('params') === 'following' && (
              <div>
                {users.map((user, index) => (
                  <div key={index}>
                    <CardComponent user={community}/>
                  </div>
                ))}
              </div>
            )}

            {pathname[0].has('params') === false && (
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis labore accusantium ut? Iusto aut sapiente unde necessitatibus similique sint nam, harum magnam libero facilis maiores dolor? Ipsam rem dignissimos, quibusdam, qui ipsa alias eius tenetur corporis facere autem voluptate ipsum! Perferendis, optio, eveniet soluta itaque praesentium laboriosam excepturi iusto sequi necessitatibus libero minima consequuntur nesciunt, numquam fugit perspiciatis non sed! Veniam aperiam saepe placeat! Natus quisquam nesciunt, veniam obcaecati neque cumque necessitatibus veritatis quaerat voluptatibus consequuntur itaque. Debitis fuga magnam provident? Eveniet sit iste expedita officiis rem reprehenderit tempora quos minus dolor error nesciunt consequatur, natus sed. Quod odio sequi cupiditate earum rem assumenda veritatis quia vero impedit et dignissimos placeat modi, commodi expedita. Reiciendis blanditiis ratione sunt, voluptatibus saepe fugiat, molestiae eius in magni ipsam iste aliquam, atque dolorum aliquid doloribus dolore hic rerum eveniet laudantium voluptates fuga! Sequi illo nesciunt reiciendis dolore cumque velit voluptas sunt harum explicabo.</p>
              </div>
            )}
        </div>
  );
}

export default Home;
