import CardCommand from '../../components/CardCommand';
import Header from '../../components/Header';
import Transaction from '../../components/Transaction';

export default function HomeScreen({ navigation }) {
    return (
      <>
      <Header />
      <CardCommand />
      <Transaction />
      </>
        
    );
}