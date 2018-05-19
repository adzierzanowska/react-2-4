var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'images/harryPotter.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        img: 'images/krolLew.jpg'
    },
    {
        id: 3,
        title: 'Iluzja',
        desc: 'Film o magikach',
        img: 'images/iluzja.jpg'
    },
    {
        id: 4,
        title: 'The Other Woman',
        desc: 'Film o zonie i kochankach męza',
        img: 'images/theOtherWoman.jpg'
    }
];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function () {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, { title: this.props.movie.title }),
                React.createElement(MovieDescription, { description: this.props.movie.desc }),
                React.createElement(MovieImage, { image: this.props.movie.img }))
        );
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function () {
        return (
            React.createElement('h2', {}, this.props.title)
        );
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        description: React.PropTypes.string.isRequired,
    },
    render: function () {
        return (
            React.createElement('p', {}, this.props.description)
        );
    }
});

var MovieImage = React.createClass({
    propTypes: {
        image: React.PropTypes.string.isRequired,
    },
    render: function () {
        return (
            React.createElement('img', { src: this.props.image })
        );
    }
});

var MoviesList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },
    render: function () {

        var moviesElements = this.props.movies.map(function (movie) {
            return React.createElement(Movie, { key: movie.id, movie: movie });
        });

        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, moviesElements))
        );
    }
});

ReactDOM.render(React.createElement(MoviesList, { movies: movies }), document.getElementById('app'));