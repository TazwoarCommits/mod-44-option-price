import { LineChart as LC, Line , XAxis , YAxis } from 'recharts';


const LineChart = () => {

    const studentsMarks = [
        {
          "id": 1,
          "name": "Alice",
          "marks": {
            "Math": 82,
            "Science": 92,
            "English": 74,
            "History": 87
          }
        },
        {
          "id": 2,
          "name": "Bob",
          "marks": {
            "Math": 72,
            "Science": 80,
            "English": 83,
            "History": 73
          }
        },
        {
          "id": 3,
          "name": "Cathy",
          "marks": {
            "Math": 92,
            "Science": 94,
            "English": 89,
            "History": 84
          }
        },
        {
          "id": 4,
          "name": "David",
          "marks": {
            "Math": 78,
            "Science": 84,
            "English": 78,
            "History": 71
          }
        },
        {
          "id": 5,
          "name": "Ella",
          "marks": {
            "Math": 96,
            "Science": 94,
            "English": 89,
            "History": 83
          }
        },
        {
          "id": 6,
          "name": "Frank",
          "marks": {
            "Math": 65,
            "Science": 70,
            "English": 73,
            "History": 65
          }
        },
        {
          "id": 7,
          "name": "Grace",
          "marks": {
            "Math": 87,
            "Science": 81,
            "English": 93,
            "History": 78
          }
        },
        {
          "id": 8,
          "name": "Hank",
          "marks": {
            "Math": 81,
            "Science": 85,
            "English": 72,
            "History": 72
          }
        },
        {
          "id": 9,
          "name": "Ivy",
          "marks": {
            "Math": 94,
            "Science": 92,
            "English": 88,
            "History": 82
          }
        },
        {
          "id": 10,
          "name": "Jack",
          "marks": {
            "Math": 73,
            "Science": 74,
            "English": 78,
            "History": 70
          }
        }
      ]


    return (
        <div>
            <LC width={500} height={400} data={studentsMarks}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={"marks.Math"} stroke='red'></Line>
                <Line dataKey={"marks.Science"} stroke='pink'></Line>
                <Line dataKey={"marks.English"}stroke='yellow'></Line>
                <Line dataKey={"marks.History"} stroke='orange'></Line>
            </LC>
        </div>
    );
};

export default LineChart;