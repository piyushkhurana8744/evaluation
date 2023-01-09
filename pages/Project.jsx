import React from 'react'
import Link from "next/link"
import { Center, Grid, GridItem,Image} from '@chakra-ui/react'
const Project = ({project}) => {
    console.log(project)
  return (
    <div>
      <Center><h1 >Project</h1></Center>
      <Grid templateColumns='repeat(2, 1fr)'  margin={"auto"} marginLeft="30px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" textAlign={"start"} gap="30px" marginTop="20px" padding="20px">
            {project.map(el=>
             <Link href={el.html_url} key={el.id}>
                <GridItem boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" padding={"10px"}>
              <Image src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png" width="100px"></Image>
              <h3>{el.name}</h3>
              <div style={{display:"flex",gap:"20px",justifyContent:"space-between"}}>
                <div style={{display:"flex",gap:"20px"}}>
                <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
                <Image src="https://e7.pngegg.com/pngimages/508/846/png-clipart-star-star-angle-triangle.png" width="20px"></Image>
                <h4>{el.stargazers_count}</h4>
              </div>
              <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
                <Image src="https://banner2.cleanpng.com/20180429/gzw/kisspng-computer-icons-fork-branching-source-code-5ae55a968fa6e5.6869739515249803745884.jpg" width="20px"></Image>
                <h4>{el.forks}</h4>
              </div>
              <div>
                <h3>{el.language}</h3>
              </div>
                </div>
              
              </div>
              
             </GridItem>
             </Link>
           )}
          </Grid>
    </div>
  )
}
export const getStaticProps=async()=>{
    let res=await fetch(`https://api.github.com/search/repositories?q=user:piyushkhurana8744+fork:true&sort=updated&per_page=10&type=Repositories`)
    let data=await res.json()
    return{
        props:{
          project:data.items
        }
    }
}
export default Project
