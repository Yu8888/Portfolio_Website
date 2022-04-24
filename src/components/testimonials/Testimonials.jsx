import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Dennis",
      title: "AUT Teammate",
      img:
        "https://media-exp1.licdn.com/dms/image/C5603AQFBJCuwZz-gEA/profile-displayphoto-shrink_100_100/0/1628679972330?e=1640217600&v=beta&t=Nv-BU7xKk6J8TeU7DJqeKCe1Xq96q1ufxjHlJw9Uzq4",
      desc: "Nice programming skills and love to work with.",
    },
    {
      id: 2,
      name: "John Reichert",
      title: "Finance Manager of The Peace Foundation",
      img:
        "https://www.peacefoundation.org.nz/wp-content/uploads/2020/08/john-headshot-temp.jpg",
      icon: "assets/youtube.png",
      desc: "Good team member and fast learner ",
      featured: true,
    },
    {
      id: 3,
      name: "Peter",
      title: "CEO of King Of Skewers",
      img:
        "https://img.restaurantguru.com/c782-Restaurant-King-of-Skewers-dishes.jpg",
      icon: "assets/linkedin.png",
      desc: "Nice staff and always seeking for a challenge",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d, index) => (
          <div className={d.featured ? "card featured" : "card"} key={index}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
