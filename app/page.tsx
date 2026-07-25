import Hero from './hero/page';
import CountDown from './countDown/page';
import Gallery from './gallery/page';
import Schedule from './schedule/page';
import RSVP from './rsvp/page';

const Page = () => {
  return (
    <div>
      <Hero />
      <CountDown />
      <Gallery />
      <Schedule />
      <RSVP />
    </div>
  )
}

export default Page
