import "./Community.scss";
import CommunityCard from "../../components/CommunityCard/CommunityCard"

const Community = () => {

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }


  const communities = [
    {
      "name": "Hello React",
      "image": "https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "name": "Hello React",
      "image": "https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "name": "Hello React",
      "image": "https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "name": "Hello React",
      "image": "https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "name": "Hello React",
      "image": "https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "name": "Hello React",
      "image": "https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ]
  return (
    <section>
      <div className="grid">
        {communities.slice(0, 4).map((community, index) => (
          <div key={index} >
            <CommunityCard randomColor={getRandomColor()} index={index} community={community}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Community