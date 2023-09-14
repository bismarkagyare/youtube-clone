import './SubscriptionRow.css';

interface SubscriptionRowProps {
  img: string;
  name: string;
}

const SubscriptionRow: React.FC<SubscriptionRowProps> = (props) => {
  return (
    <div className="subscriptionRow">
      <div className="left">
        <img className="channel-logo" src={props.img} />
        <p className="channel-name">{props.name}</p>
      </div>
      <div className="right">
        <img
          className="live-img"
          src="https://cdn-icons-png.flaticon.com/128/3049/3049365.png"
        />
      </div>
    </div>
  );
};

export default SubscriptionRow;
