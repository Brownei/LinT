import "./Articles.scss"
import { Link, useLocation } from 'react-router-dom';
import CardComponent from "../../components/Card/CardComponent";


const ArticlesPage = (props) => {
  const users = props.users;
  
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);
  console.log(searchParams);

      return(
        <div id="articles_page">
            <div className="h-container">
              <Link to='/articles' className={searchParams.has('params') === false ? 'selected' : 'element'}>For you</Link> 
              <Link to='/articles?params=following' className={searchParams.get('params') === 'following' ? 'selected' : 'element'}>Following</Link> 

            </div>
           
            
            CARD COMPONENTS
               {searchParams.get('params') === "" && ( 
                  <div>
                  {users.map((user, index) => (
                    <div key={index}>
                      <CardComponent user={user} />
                    </div>
                  ))}
                </div>
               )}
             {/*{pathname[0].get('params') === null && ( */}
            {/* {location.pathname === null && (
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis labore accusantium ut? Iusto aut sapiente unde necessitatibus similique sint nam, harum magnam libero facilis maiores dolor? Ipsam rem dignissimos, quibusdam, qui ipsa alias eius tenetur corporis facere autem voluptate ipsum! Perferendis, optio, eveniet soluta itaque praesentium laboriosam excepturi iusto sequi necessitatibus libero minima consequuntur nesciunt, numquam fugit perspiciatis non sed! Veniam aperiam saepe placeat! Natus quisquam nesciunt, veniam obcaecati neque cumque necessitatibus veritatis quaerat voluptatibus consequuntur itaque. Debitis fuga magnam provident? Eveniet sit iste expedita officiis rem reprehenderit tempora quos minus dolor error nesciunt consequatur, natus sed. Quod odio sequi cupiditate earum rem assumenda veritatis quia vero impedit et dignissimos placeat modi, commodi expedita. Reiciendis blanditiis ratione sunt, voluptatibus saepe fugiat, molestiae eius in magni ipsam iste aliquam, atque dolorum aliquid doloribus dolore hic rerum eveniet laudantium voluptates fuga! Sequi illo nesciunt reiciendis dolore cumque velit voluptas sunt harum explicabo.</p>

              </div>
            )}  */}
 
            {/* if ({location.pathname === 'following'}) {
                  <div>
                    {users.map((user, index) => (
                      <div key={index}>
                        <CardComponent user={user} />
                      </div>
                    ))}
                  </div>
              }  */}

          {searchParams.has('params') === "following" && (
            <div>
                {users.map((user, index) => (
                  <div key={index}>
                    <CardComponent user={user} />
                  </div>
                ))}
            </div>
          )}
        </div>
  )
}

export default ArticlesPage;