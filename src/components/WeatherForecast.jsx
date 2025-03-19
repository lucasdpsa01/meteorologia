import styled from "styled-components";

const ForeastContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 100px;
`;

const DayCard = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    margin: 10px;
    flex: 1;
    min-width:100px;

    &:first-child {
        flex: 2; /* Ocupa o dobro do espaço dos outros */
    }
`;

const DateText = styled.p`
    margin: 0;
    font-weigth: bold;
`;

const TempText = styled.p`
    margin: 5px 0 0 0;
`;

const WeatherForecast = ({ forecast }) => (
    <ForeastContainer>
        {forecast.map((day, index) => (
            <DayCard key={index}>
                <DateText>{day.rate}</DateText>
                <TempText>Min: {day.minTemp}°C</TempText>
                <TempText>Max: {day.maxTemp}°C</TempText>
            </DayCard>
        ))}
    </ForeastContainer>
);

export default WeatherForecast;