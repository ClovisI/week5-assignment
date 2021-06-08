list of charater names

\

http https://swapi.dev/api/people/
take all characters, then display them in a list

home page disp;lay lisst of characters
  each char has link to char detail page = router
  only name is required

Char detail page:
  Display 4-5 facts about the char
  Should display char image if returned from API

Use react router to change between views   componentOnMOutn
  Minumum two rotues
    One route for rendering char list comp
      Use fetch to retreve the cahr list after mount


      Let

      class Character extends React.Component{
        constructor(props){
          super(props);
          this.state = {...people};
        }
      }

router for nav

switch for route Path
