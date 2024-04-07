import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";

const API_URL: string = "https://api.irail.be/stations/?format=json&lang=en";

interface ResponseData {
  name: string;
  locationX: string;
  locationY: string;
}

const TableWithDetails: React.FC = () => {
  const [data, setData] = useState<ResponseData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [displayData, setDisplayData] = useState<ResponseData[]>([]);

  const fetchData: Function = async () => {
    try {
      setIsLoading(true);
      let response = await fetch(API_URL);
      let result = await response.json();
      setData(result?.station);
      setDisplayData(result?.station);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const searchData: ChangeEventHandler<HTMLInputElement> = (event) => {
    let newData: ResponseData[] = data.filter((item) =>
      item.name
        .toLowerCase()
        .includes(event?.target?.value?.toLocaleLowerCase())
    );
    setDisplayData(newData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="details-table-container">
      {isLoading && <div className="loading">Loading...</div>}
      <div className="title">Belgium Public Transport Details</div>
      <div className="search-bar">
        <div className="title">Search:</div>
        <input className="search-box" onChange={searchData} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>note</th>
          </tr>
        </thead>
        <tbody>
          {displayData.map((station: any, index: number) => (
            <tr key={index}>
              <td>{station.name}</td>
              <td>{station.locationX}</td>
              <td>{station.locationY}</td>
              <td>
                <input className="input" type="text" id={station.name} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableWithDetails;
