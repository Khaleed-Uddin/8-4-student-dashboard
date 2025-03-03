import StudentCard from "./StudentCard";

const Container = ({ data, heading }) => {
  // console.log(data)
   
  return (
    <div id="container">
      <h2>{heading}</h2>
      <p>Total Students: {data.length}</p>
        {data.map(({ names, profilePhoto, id, username, dob, certifications, codewars, cohort}) => {
        return (
          <div key={id}>
            <StudentCard
              names={names}
              profilePhoto={profilePhoto}
              username={username}
              dob={dob}
              certifications={certifications}
              codewars={codewars}
              cohort={cohort}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Container;