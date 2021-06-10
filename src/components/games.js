import React, { Component } from 'react'
import '../games.css'






export default class Games extends Component {

constructor() {
	super()
	this.state={
		games: []
	}
}	

getGames= async (e) => {

fetch('https://fly.sportsdata.io/v3/mlb/scores/json/GamesByDate/current?key=8bf7f1bbf712435ba355a0d8b778052a')
.then(response=> {
	return response.json()

}).then(data=> {
	this.setState({
		games:data,
		hi: "hi"
	})
	console.log('THEEEEN', this.state.games)
})

console.log('theese are the games',this.state.games)
console.log('HIIII', this.state.hi)

}

componentWillMount(){
	this.getGames()
}

render() {

	console.log('@@@@', this.state)
	
	return(
		
		
		<div className='game-banner'>
		{this.state.games.map(game=> {
			return(
				<ul className='each-game'>
				{(game.AwayTeam === 'WSH')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/6/6c/Washington_Nationals_logo_%28low_res%29.svg"}/> </span>{game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'SD')
					? <li className='side'> <span> <img classname='g-img' src={"https://upload.wikimedia.org/wikipedia/commons/a/a4/SDPadres_logo.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'MIL')
					? <li className='side'> <span> <img classname='g-img' src={"https://upload.wikimedia.org/wikipedia/en/b/b8/Milwaukee_Brewers_logo.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'STL')
					? <li className='side'> <span> <img classname='g-img' src={"https://upload.wikimedia.org/wikipedia/en/9/9d/St._Louis_Cardinals_logo.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'HOU')
					? <li className='side'> <span> <img classname='g-img 'src={"https://upload.wikimedia.org/wikipedia/commons/6/6b/Houston-Astros-Logo.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'NYY')
					? <li className='side'> <span> <img classname='g-img 'src={"https://upload.wikimedia.org/wikipedia/en/2/25/NewYorkYankees_PrimaryLogo.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'TEX')
					? <li className='side'> <span> <img classname='g-img' src={"https://upload.wikimedia.org/wikipedia/en/4/41/Texas_Rangers.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'ATL')
					? <li className='side'> <span> <img classname='g-img' src={"https://upload.wikimedia.org/wikipedia/en/f/f2/Atlanta_Braves.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'BOS')
					? <li className='side'> <span> <img classname='g-img' src={"https://upload.wikimedia.org/wikipedia/en/6/6d/RedSoxPrimary_HangingSocks.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'OAK')
					? <li className='side'> <span> <img classname='g-img' src={"https://upload.wikimedia.org/wikipedia/commons/a/a4/Oakland_A%27s_logo.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'COL')
					? <li className='side'> <span> <img classname='g-img' src={"https://upload.wikimedia.org/wikipedia/commons/3/31/Colorado_Rockies_logo.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'MIA')
					? <li className='side'> <span> <img classname='g-img' src={"https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Marlins_team_logo.svg/800px-Marlins_team_logo.svg.png"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'ANA')
					? <li className='side'> <span> <img  classname='g-img' src={"https://upload.wikimedia.org/wikipedia/commons/8/8b/Los_Angeles_Angels_of_Anaheim.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'MIN')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/b/b4/Minnesota_Twins_logo_%28low_res%29.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'NYM')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/7/7b/New_York_Mets.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				
				{(game.AwayTeam === 'DET')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/commons/e/e3/Detroit_Tigers_logo.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'CHW')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/commons/c/c1/Chicago_White_Sox.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'SF')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/5/58/San_Francisco_Giants_Logo.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'ARI')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/5/54/Arizona_Diamondbacks_logo_%28low_res%29.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'SEA')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/6/6d/Seattle_Mariners_logo_%28low_res%29.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'PHI')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/f/f0/Philadelphia_Phillies_%282019%29_logo.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'PIT')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/commons/8/81/Pittsburgh_Pirates_logo_2014.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'TOR')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/6/68/Toronto_Blue_Jays_cap.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'CIN')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/commons/0/01/Cincinnati_Reds_Logo.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'LAD')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/a/a0/Los_Angeles_Dodgers_logo_%28low_res%29.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'TB')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/c/c6/Tampa_Bay_Rays.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'KC')
					? <li className='side'> <span> <img classname='g-img'src={ "https://upload.wikimedia.org/wikipedia/en/1/1c/Kansas_City_Royals.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'CHC')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/commons/8/80/Chicago_Cubs_logo.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'LAA')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/commons/8/8b/Los_Angeles_Angels_of_Anaheim.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}
				{(game.AwayTeam === 'CLE')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/commons/e/ee/Cleveland_Indians_primary_logo.svg"}/> </span> {game.AwayTeam} </li>
					:''
				}





				{(game.HomeTeam === 'WSH')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/6/6c/Washington_Nationals_logo_%28low_res%29.svg"}/> </span>@{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'SD')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/commons/a/a4/SDPadres_logo.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'MIL')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/b/b8/Milwaukee_Brewers_logo.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'STL')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/9/9d/St._Louis_Cardinals_logo.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'HOU')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/commons/6/6b/Houston-Astros-Logo.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'NYY')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/2/25/NewYorkYankees_PrimaryLogo.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'TEX')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/4/41/Texas_Rangers.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'ATL')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/f/f2/Atlanta_Braves.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'BOS')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/6/6d/RedSoxPrimary_HangingSocks.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'OAK')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/commons/a/a4/Oakland_A%27s_logo.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'COL')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/commons/3/31/Colorado_Rockies_logo.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'MIA')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Marlins_team_logo.svg/800px-Marlins_team_logo.svg.png"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'ANA')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/commons/8/8b/Los_Angeles_Angels_of_Anaheim.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'MIN')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/b/b4/Minnesota_Twins_logo_%28low_res%29.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'NYM')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/7/7b/New_York_Mets.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				
				{(game.HomeTeam === 'DET')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/commons/e/e3/Detroit_Tigers_logo.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'CHW')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/commons/c/c1/Chicago_White_Sox.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'SF')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/5/58/San_Francisco_Giants_Logo.svg"}/> </span> @{game.AwayTeam} </li>
					:''
				}
				{(game.HomeTeam === 'ARI')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/5/54/Arizona_Diamondbacks_logo_%28low_res%29.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'SEA')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/6/6d/Seattle_Mariners_logo_%28low_res%29.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'PHI')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/f/f0/Philadelphia_Phillies_%282019%29_logo.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'PIT')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/commons/8/81/Pittsburgh_Pirates_logo_2014.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'TOR')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/6/68/Toronto_Blue_Jays_cap.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'CIN')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/commons/0/01/Cincinnati_Reds_Logo.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'LAD')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/a/a0/Los_Angeles_Dodgers_logo_%28low_res%29.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'WAS')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/6/6c/Washington_Nationals_logo_%28low_res%29.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'TB')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/c/c6/Tampa_Bay_Rays.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'CHC')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/6/6c/Washington_Nationals_logo_%28low_res%29.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'KC')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/6/6c/Washington_Nationals_logo_%28low_res%29.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'LAA')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/commons/8/8b/Los_Angeles_Angels_of_Anaheim.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'CLE')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/commons/e/ee/Cleveland_Indians_primary_logo.svg"}/> </span> @{game.HomeTeam} </li>
					:''
				}
				{(game.HomeTeam === 'BAL')
					? <li className='side'> <span> <img classname='g-img'src={"https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Baltimore_Orioles_cap.svg/105px-Baltimore_Orioles_cap.svg.png"}/> </span> @{game.HomeTeam} </li>
					:''
				}




					
					


				</ul>
			)
		})}
			
		</div>
		
	)
}


}