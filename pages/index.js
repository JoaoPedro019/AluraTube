import react from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSreset } from "../src/components/CSSreset";
import Menu from "../src/components/Menu/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavorits } from "../src/components/Favorits";
import { videoService } from "../src/components/services/videoService";


function HomePage() {
        const service = videoService();
        const [valorDoFiltro, setValorDoFiltro] = react.useState("");
        const [playlists, setPlaylists] = react.useState({});    

        react.useEffect(() => {
            console.log("useEffect");
            service
                .getAllVideos()
                .then((dados) => {
                    console.log(dados.data);
                    const novasPlaylists = {};
                    dados.data.forEach((video) => {
                        if (!novasPlaylists[video.playlist]) novasPlaylists[video.playlist] = [];
                        novasPlaylists[video.playlist] = [
                            video,
                            ...novasPlaylists[video.playlist],
                        ];
                    });
    
                    setPlaylists(novasPlaylists);
                });
        }, []);
    
    

    return (
        <>
            <CSSreset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                 <Menu />
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={playlists}>
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

    background-color: ${({ theme }) => theme. backgroundLevel1};

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
        display: flex;
        width: 100%;
        height:  calc(16.1290322581vw - 1px);
        background-image: url("https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFja2dyb3VuZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60");
        background-repeat: no-repeat;
        background-size: cover;
    }
`;
function Header() {
    return (
        <StyledHeader>
            {<img className="banner" />}
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

function Timeline ({searchValue, ...propriedades}) {
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
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                        {videos
                                .filter((videos) => {
                                    const titleNormalized = videos.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized)
                                })
                                .map((videos) => {
                                return (
                                    <a key={videos.url} href={videos.url}>
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
