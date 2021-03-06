import React from 'react'
import {Inner,Container,SubTitle,Title,Image,Pane,Item} from './styles/jumbotron'

export default function Jumbotron({children,direction='row',...restProps}){
    return(
    <Item {...restProps}>
        <Inner direction={direction}>{children}</Inner>
      </Item>
    )


}

Jumbotron.Container = function JumboContainer({children,...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function JumboPane({children,...restProps}){
    return <Pane {...restProps}>{children}</Pane>
}

Jumbotron.SubTitle = function JumboSubTitle({children,...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Title = function JumboTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Jumbotron.Image = function JumboImage({children,...restProps}){
    return <Image {...restProps}/>
}









