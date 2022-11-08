import React from "react";
import SimilarItems from "../components/SimilarItems";
import sofa from "../photos/sofa.png";
import Ysofa from "../photos/Ysofa.png";
import chair from "../photos/chair.png";
import pillow from "../photos/pillow.png";
import table from "../photos/table.png";
import styles from "./Main.module.css";
import Featured from "../components/Featured";
import Fchair from "../photos/Fchair.png";
import FLchair from "../photos/FLchair.png";
import Fdrum from "../photos/Fdrum.png";
import Fstool from "../photos/Fstool.png";
import idea from "../photos/idea.png";
import lastStool from "../photos/lastStool.png";
import NewSeason from "../components/NewSeason";
import InstaImage from "../components/InstaImage";
import i1 from "../photos/i1.png";
import i2 from "../photos/i2.png";
import i3 from "../photos/i3.png";
import i4 from "../photos/i4.png";
import i5 from "../photos/i5.png";
import i6 from "../photos/i6.png";
import Blog from "../components/Blog";
import blog1 from "../photos/blog1.png";
import blog2 from "../photos/blog2.png";
import blog3 from "../photos/blog3.png";
import Note from "../components/Note";
import c1 from "../photos/c1.png";
import c2 from "../photos/c2.png";
import c3 from "../photos/c3.png";
import c4 from "../photos/c4.png";
import c5 from "../photos/c5.png";
import c6 from "../photos/c6.png";

const Main = (props) => {
  return (
    <React.Fragment>
      <main>
        <section className={styles.container}>
          <article>
            <fig clasname={styles.main_sofa}>
              <img className={styles.img} src={sofa} alt="sofa" />
            </fig>
            <div className={styles.top_left}>
              <h5>NEW COLLECTION</h5>
              <h1>BEAUTIFUL SOFA</h1>
              <p>
                Taking time to just sit back and relax –it’s sometimes easier
                Said than done.
              </p>
              {/* <br></br> */}
              <p>
                That’s why we make soft, cosy sofas and armchairs you can sink
                into.
              </p>
              <button className={styles.shop} type="submit">
                SHOP NOW
              </button>
              <p>SHOP NOW</p>
            </div>
          </article>
        </section>

        <div className={styles.similar}>
          <SimilarItems image={Ysofa} > </SimilarItems>
          <SimilarItems image={chair}> </SimilarItems>
          <SimilarItems image={pillow}> </SimilarItems>
          <SimilarItems image={table}> </SimilarItems>
        </div>
        <h2 className={styles.fet_head}>Featured Product</h2>
        <div className={styles.border}></div>

        <div className={styles.featured}>
          <Featured
            image={Fchair}
            title="Pyramid Modern Dining Side Chair"
            price="$69.00"
          ></Featured>
          <Featured
            image={Fstool}
            title="Ernie Modern Bar Stool"
            price="$69.00"
          ></Featured>
          <Featured
            image={Fdrum}
            title="Drum Pendant Light"
            price="$69.00"
          ></Featured>
          <Featured
            image={FLchair}
            title="Occasional Chair Multicolor"
            price="$69.00"
          ></Featured>
        </div>
        <div className={styles.greenImage}>
        <img className={styles.idea_image} src={idea} alt="idea"></img>
          <div className={styles.idea}>
            <h5>LIVING ROOM IDEAS</h5>
            <p>
              From comfortable seating to smart living room storage, we've got
              all the living room furniture you need for creating your own space
              to gather. And we've got lots of living room ideas for putting it
              all together, too.
            </p>
          </div>
        </div>

        <section className={styles.season}>
            <div className={styles.seas_cont}>
          <h2 >New in this season</h2>
          </div>
          <ul className={styles.new}>
            <NewSeason image={lastStool}></NewSeason>
            <NewSeason image={lastStool}></NewSeason>
            <NewSeason image={lastStool}></NewSeason>
            <NewSeason image={lastStool}></NewSeason>
            <NewSeason image={lastStool}></NewSeason>
            <NewSeason image={lastStool}></NewSeason>
            <NewSeason image={lastStool}></NewSeason>
            <NewSeason image={lastStool}></NewSeason>
          </ul>
        </section>
        <button type="submit">Load More</button>
        <section className={styles.insta_sec}>
          <div className={styles.insta}>
            <div className={styles.insta_cont}>
              <h5>#FOLLOW US ON INSTAGRAM</h5>
              <p>
                This is your UO: your favourite looks, spaces, music and more.
                Share your our pics for a change to be featured
              </p>
            </div>
            <div className={styles.insta1}>
              <InstaImage image={i1}></InstaImage>
              <InstaImage image={i2}></InstaImage>
              <InstaImage image={i3}></InstaImage>
              <InstaImage image={i4}></InstaImage>
              <InstaImage image={i5}></InstaImage>
              <InstaImage image={i6}></InstaImage>
            </div>
          </div>
        </section>
        <div>
          <div className={styles.blog}>
            <Blog image={blog1}></Blog>
            <Blog image={blog2}></Blog>
            <Blog image={blog3}></Blog>
          </div>
        </div>
        <div>
          <ul className={styles.comp}>
            <li>
              <img src={c1} alt="h"></img>
            </li>
            <li>
              <img src={c2} alt="h"></img>
            </li>
            <li>
              <img src={c3} alt="h"></img>
            </li>
            <li>
              <img src={c4} alt="h"></img>
            </li>
            <li>
              <img src={c5} alt="h"></img>
            </li>
            <li>
              <img src={c6} alt="h"></img>
            </li>
          </ul>
        </div>
        <div className={styles.note}>
          <Note title="Free Shipping" cont="On every order, every day!" />
          <Note title="Secure Payment" cont="We value your security" />
          <Note
            title="Money Back Guarantee"
            cont="30 days money back guarantee"
          />
          <Note
            title="24/7 Customer Service"
            cont="Support number (0123) 123 456"
          />
        </div>
      </main>
    </React.Fragment>
  );
};

export default Main;
