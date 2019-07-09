
class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: ' # Philosophy \n ## A Second Level Header \n Theres also [links](https://www.freecodecamp.com) \`nothing\`. 1. Visit \n 2. Check on facebook ![alt text](http://mom.rs/wp-content/uploads/2016/10/test-logo.png) \n> No Zizek, we promise. Hello, **world**! \n ```\njavascript \n var s = "JavaScript syntax highlighting"; \n alert(s)    ```'
        };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    getRawMarkup() {
        const md = new Remarkable();
        return { __html: md.render(this.state.value) };
    }

    render() {
        return (
            <div className="MarkdownEditor">
                <h3>Input</h3>
                <label htmlFor="editor">
                    Enter some markdown
        </label>
                <textarea
                    id="editor"
                    onChange={this.handleChange}
                    defaultValue={this.state.value}
                />
                <h3>Output</h3>
                <div id="preview"
                    className="content"
                    dangerouslySetInnerHTML={this.getRawMarkup()}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <MarkdownEditor />,
    document.getElementById('markdown-example')
);
