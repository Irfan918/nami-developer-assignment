import Card from "./Card";
import { delayedData, finshedData, notifyData } from "../data";

const TaskCard: React.FC = () => {
  return (
    <div className="flex items-start gap-2 flex-col md:flex-row">
      <div className=" flex flex-col items-start gap-6 mt-5">
        {notifyData.map((data) => (
          <Card
            key={data.id}
            status={data.status}
            time={data.time}
            task={data.task}
            details={data.details}
            image={data.image}
          />
        ))}
      </div>
      <div className=" flex flex-col items-start gap-6 mt-5">
        {finshedData.map((data) => (
          <Card
            key={data.id}
            task={data.task}
            details={data.details}
            image={data.image}
          />
        ))}
      </div>
      <div className=" flex flex-col items-start gap-6 mt-5">
        {delayedData.map((data) => (
          <Card
            key={data.id}
            status={data.status}
            complaint={data.complaint}
            rating={data.rating}
            task={data.task}
            details={data.details}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskCard;
