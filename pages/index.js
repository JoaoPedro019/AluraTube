import config from "../config.json";
import styled from "styled-components";
import { CSSreset } from "../src/components/CSSreset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavorits } from "../src/components/Favorits";

function HomePage() {
    const estilosDaHomePage = {
        // backgroundColor: "red" 
    };

    // console.log(config.playlists);

    return (
        <>
            <CSSreset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists}>
                    Conteúdo
                </Timeline>
                <Favorits Youtubers={config.Youtubers}>
                    Conteúdo
                </Favorits>
            </div>
        </>
    );
}

export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }


const StyledHeader = styled.div`
    .img__user {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 1px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }

    .banner {
        margin-top: 1px;
        display:flex;
        width: 100%;
        height: calc(16.1290322581vw - 0.5px);
        
    }
`;
function Header() {
    return (
        <StyledHeader>
            {<img src="https://images.unsplash.com/photo-1668162456452-11e6ca7c8608?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60" className="banner" />}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} className="img__user" />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(propriedades) {
    // console.log("Dentro do componente", propriedades.playlists);
    const playlistNames = Object.keys(propriedades.playlists);
    // Statement
    // Retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((videos) => {
                                return (
                                    <a href={videos.url}>
                                        <img src={videos.thumb} />
                                        <span>
                                            {videos.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )

};

function Favorits(propriedades) {
    const FavoritosNames = Object.keys(propriedades.Youtubers);
    return (
        <StyledFavorits>
            {FavoritosNames.map((FavoritosName) => {
                const Fav = propriedades.Youtubers[FavoritosName];
                console.log(FavoritosName);
                console.log(Fav);
                return (
                    <section>
                        <h2>{FavoritosName}</h2>
                        <div>
                            {Fav.map((Fav) => {
                                return (
                                    <a href={Fav.url}>
                                        <img src={Fav.thumb} />
                                        <span>
                                            {Fav.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledFavorits>
    )
}
