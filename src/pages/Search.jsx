import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
const Search = () => {
  const [filters, setFilters] = useState({
    karma: 0,
  });

  const [jobSeekers, setJobSeekers] = useState([
    {
      id: 1,
      name: "Adrin Jose C T",
      image:
        "https://media.licdn.com/dms/image/D5603AQHyWlv_2MTKBg/profile-displayphoto-shrink_800_800/0/1699649502236?e=1705536000&v=beta&t=aVuxo3G7UT3sFgqGJ71Wk8YtgTZfef4vdc-Lk5wSZNk",
      role: "Full Stack Web Dev",
      expertise: [
        "Frontend Dev",
        "Backend Dev",
        "Project Manager",
        "Database Engineer",
      ],
      karma: 3000,
      links: 389,
      mail: "adrin7113@gmail.com",
    },
    {
      id: 2,
      name: "Adrin Jose C T 2",
      image:
        "https://media.licdn.com/dms/image/D5603AQHyWlv_2MTKBg/profile-displayphoto-shrink_800_800/0/1699649502236?e=1705536000&v=beta&t=aVuxo3G7UT3sFgqGJ71Wk8YtgTZfef4vdc-Lk5wSZNk",
      role: "Full Stack Web Dev",
      expertise: [
        "Frontend Dev",
        "Backend Dev",
        "Project Manager",
        "Database Engineer",
      ],
      karma: 4000,
      links: 389,
      mail: "adrin7113@gmail.com",
    },
    {
      id: 3,
      name: "Adrin Jose C T 3",
      image:
        "https://media.licdn.com/dms/image/D5603AQHyWlv_2MTKBg/profile-displayphoto-shrink_800_800/0/1699649502236?e=1705536000&v=beta&t=aVuxo3G7UT3sFgqGJ71Wk8YtgTZfef4vdc-Lk5wSZNk",
      role: "Full Stack Web Dev",
      expertise: [
        "Frontend Dev",
        "Backend Dev",
        "Project Manager",
        "Database Engineer",
      ],
      karma: 5000,
      links: 389,
      mail: "adrin7113@gmail.com",
    },
    {
      id: 4,
      name: "Adrin Jose C T 4",
      image:
        "https://media.licdn.com/dms/image/D5603AQHyWlv_2MTKBg/profile-displayphoto-shrink_800_800/0/1699649502236?e=1705536000&v=beta&t=aVuxo3G7UT3sFgqGJ71Wk8YtgTZfef4vdc-Lk5wSZNk",
      role: "Full Stack Web Dev",
      expertise: [
        "Frontend Dev",
        "Backend Dev",
        "Project Manager",
        "Database Engineer",
      ],
      karma: 6000,
      links: 389,
      mail: "adrin7113@gmail.com",
    },
    {
      id: 5,
      name: "Adrin Jose C T 5",
      image:
        "https://media.licdn.com/dms/image/D5603AQHyWlv_2MTKBg/profile-displayphoto-shrink_800_800/0/1699649502236?e=1705536000&v=beta&t=aVuxo3G7UT3sFgqGJ71Wk8YtgTZfef4vdc-Lk5wSZNk",
      role: "Full Stack Web Dev",
      expertise: [
        "Frontend Dev",
        "Backend Dev",
        "Project Manager",
        "Database Engineer",
      ],
      karma: 7000,
      links: 389,
      mail: "adrin7113@gmail.com",
    },
    {
      id: 6,
      name: "Adrin Jose C T 6",
      image:
        "https://media.licdn.com/dms/image/D5603AQHyWlv_2MTKBg/profile-displayphoto-shrink_800_800/0/1699649502236?e=1705536000&v=beta&t=aVuxo3G7UT3sFgqGJ71Wk8YtgTZfef4vdc-Lk5wSZNk",
      role: "Full Stack Web Dev",
      expertise: [
        "Frontend Dev",
        "Backend Dev",
        "Project Manager",
        "Database Engineer",
      ],
      karma: 8000,
      links: 389,
      mail: "adrin7113@gmail.com",
    },
  ]);
  const tempData = [
    {
      id: 1,
      name: "Adrin Jose C T",
      image:
        "https://media.licdn.com/dms/image/D5603AQHyWlv_2MTKBg/profile-displayphoto-shrink_800_800/0/1699649502236?e=1705536000&v=beta&t=aVuxo3G7UT3sFgqGJ71Wk8YtgTZfef4vdc-Lk5wSZNk",
      role: "Full Stack Web Dev",
      expertise: [
        "Frontend Dev",
        "Backend Dev",
        "Project Manager",
        "Database Engineer",
      ],
      karma: 3000,
      links: 389,
      mail: "adrin7113@gmail.com",
    },
    {
      id: 2,
      name: "Adrin Jose C T 2",
      image:
        "https://media.licdn.com/dms/image/D5603AQHyWlv_2MTKBg/profile-displayphoto-shrink_800_800/0/1699649502236?e=1705536000&v=beta&t=aVuxo3G7UT3sFgqGJ71Wk8YtgTZfef4vdc-Lk5wSZNk",
      role: "Full Stack Web Dev",
      expertise: [
        "Frontend Dev",
        "Backend Dev",
        "Project Manager",
        "Database Engineer",
      ],
      karma: 4000,
      links: 389,
      mail: "adrin7113@gmail.com",
    },
    {
      id: 3,
      name: "Adrin Jose C T 3",
      image:
        "https://media.licdn.com/dms/image/D5603AQHyWlv_2MTKBg/profile-displayphoto-shrink_800_800/0/1699649502236?e=1705536000&v=beta&t=aVuxo3G7UT3sFgqGJ71Wk8YtgTZfef4vdc-Lk5wSZNk",
      role: "Full Stack Web Dev",
      expertise: [
        "Frontend Dev",
        "Backend Dev",
        "Project Manager",
        "Database Engineer",
      ],
      karma: 5000,
      links: 389,
      mail: "adrin7113@gmail.com",
    },
    {
      id: 4,
      name: "Adrin Jose C T 4",
      image:
        "https://media.licdn.com/dms/image/D5603AQHyWlv_2MTKBg/profile-displayphoto-shrink_800_800/0/1699649502236?e=1705536000&v=beta&t=aVuxo3G7UT3sFgqGJ71Wk8YtgTZfef4vdc-Lk5wSZNk",
      role: "Full Stack Web Dev",
      expertise: [
        "Frontend Dev",
        "Backend Dev",
        "Project Manager",
        "Database Engineer",
      ],
      karma: 6000,
      links: 389,
      mail: "adrin7113@gmail.com",
    },
    {
      id: 5,
      name: "Adrin Jose C T 5",
      image:
        "https://media.licdn.com/dms/image/D5603AQHyWlv_2MTKBg/profile-displayphoto-shrink_800_800/0/1699649502236?e=1705536000&v=beta&t=aVuxo3G7UT3sFgqGJ71Wk8YtgTZfef4vdc-Lk5wSZNk",
      role: "Full Stack Web Dev",
      expertise: [
        "Frontend Dev",
        "Backend Dev",
        "Project Manager",
        "Database Engineer",
      ],
      karma: 7000,
      links: 389,
      mail: "adrin7113@gmail.com",
    },
    {
      id: 6,
      name: "Adrin Jose C T 6",
      image:
        "https://media.licdn.com/dms/image/D5603AQHyWlv_2MTKBg/profile-displayphoto-shrink_800_800/0/1699649502236?e=1705536000&v=beta&t=aVuxo3G7UT3sFgqGJ71Wk8YtgTZfef4vdc-Lk5wSZNk",
      role: "Full Stack Web Dev",
      expertise: [
        "Frontend Dev",
        "Backend Dev",
        "Project Manager",
        "Database Engineer",
      ],
      karma: 8000,
      links: 389,
      mail: "adrin7113@gmail.com",
    },
  ];
  useEffect(() => {
    setJobSeekers(
      tempData.filter((value) => {
        return value.karma >= filters.karma;
      })
    );
  }, [filters]);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      <div className="w-1/2 relative">
        <input
          type="text"
          className="focus:outline-none p-5 mono text-xl w-full my-6 h-[75px] border rounded-full"
          placeholder="Search Skillsets..."
        />
        <div className="cursor-pointer absolute top-9 right-10 rounded-full flex justify-between p-5 items-center bg-[#EDEDED] w-[150px] h-[50px]">
          Search
          <img
            src="/landing/search.png"
            alt="Search Here"
            className="w-6 h-6"
          />
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-[80%]  flex flex-wrap justify-center">
          {jobSeekers.map((value, index) => (
            <div
              key={index}
              style={{
                boxShadow: "0px 3.36px 108.00001px 0px rgba(0, 0, 0, 0.15)",
              }}
              className="w-[40%] h-[300px] bg-white rounded-xl m-5 flex"
            >
              <div className="w-1/2 h-full flex flex-col gap-5 justify-center items-center">
                <img
                  src={value.image}
                  alt={`A picture of ${value.name}`}
                  className="rounded-full w-28 h-28"
                />
                <h1 className="text-lg mono">Karma: {value.karma}🔥</h1>
                <h1 className="text-lg mono">Links: {value.links}</h1>
              </div>
              <div className="w-1/2 h-full flex flex-col justify-around items-center">
                <div>
                  <h1 className="text-xl font-bold mono">{value.name}</h1>
                  <h1 className="text-lg fmono">{value.role}</h1>
                  <ul className="flex flex-col justify-start text-sm list-disc">
                    {value.expertise.map((value1, index1) => (
                      <li key={index1}>{value1}</li>
                    ))}
                  </ul>
                </div>
                <button className="mx-auto mr-5 bg-black text-white hover:bg-white border-2 hover:border-black  hover:text-black transition-all ease-in-out duration-500 w-[125px] h-[50px] rounded-full">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          className="w-[18%] rounded-xl m-5 min-h-[600px] "
          style={{
            boxShadow: "0px 3.36px 108.00001px 0px rgba(0, 0, 0, 0.15)",
          }}
        >
          <h1 className="mono p-5 text-4xl font-bold border-b-2 border-black w-full text-center ">
            Filters
          </h1>
          <div className="flex justify-between items-center text-xl font-bold mono px-10 py-5">
            <h1>A-Z</h1>
            <h1>Ascending ↓</h1>
          </div>
          <div className="w-full flex justify-center gap-5">
            <input
              type="range"
              onChange={(e) =>
                setFilters({ ...filters, karma: e.target.value })
              }
              min="0"
              max="10000"
              className="w-[70%] accent-red-600 "
            />
            <p className="mono font-bold">{filters.karma}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
