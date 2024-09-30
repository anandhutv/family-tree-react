import logo from './logo.svg';
import './App.css';
import FamilyTree from './components/FamilyTree/FamilyTree';

const familyData = {
  id: 0,
  user_id: 0,
  name: "Alan",
  profile_picture: "https://www.cloudways.com/wp-content/uploads/2022/10/ricky.png",
  spouse: [
    {
      id: 1,
      name: "Monica",
      image: "https://teamworkassociatesinc.org/wp-content/uploads/2021/10/Panghoua.png",
    }
  ],
  children: [
    {
      id: 2,
      user_id: 2,
      name: "Mersey Alan",
      profile_picture: "https://images.squarespace-cdn.com/content/v1/5d3b50b44d055000014b54aa/78e6ceb7-f7a4-4aa0-990d-7f41c06e51d8/Profile_Jantzen.png",
      spouse: [
        {
          id: 3,
          name: "George",
          image: "https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG.png",
        }
      ],
      children: [
        {
          id: 6,
          user_id: 6,
          name: "Aman George",
          profile_picture: "https://www.levelequity.com/wp-content/uploads/sean-diljore-simpro-02.png",
        }
      ]
    },
    {
      id: 4,
      user_id: 4,
      name: "Adam Alan",
      profile_picture: "https://mypulse.io/wp-content/themes/understrap-child-1.1.0/img/blog/Chirag_Shah.png",
      spouse: [
        {
          id: 5,
          name: "Anisa Adam",
          image: "https://www.oc-cf.org/wp-content/uploads/2022/05/JOANNA_KONG.png",
        }
      ],
      children: [
        {
          id: 7,
          user_id: 7,
          name: "Francis Adam",
          profile_picture: "https://skydeck.berkeley.edu/wp-content/uploads/2024/04/Muaz-modified.png",
        },
        {
          id: 8,
          user_id: 8,
          name: "Nami Adam",
          profile_picture: "https://rigits.com/wp-content/uploads/2024/05/marifel_optimized.png",
        },
        {
          id: 9,
          user_id: 9,
          name: "Jeslia Adam",
          profile_picture: "https://cdn.fs.teachablecdn.com/H8DRdN7RvSLmqi0uQlFX",
        }
      ]
    }
  ]
};

function App() {
  return (
    <div className="App">
     <h1>Family Tree</h1>
     <FamilyTree data={familyData}/>
    </div>
  );
}

export default App;
