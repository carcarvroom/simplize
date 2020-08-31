import React, { Component } from 'react'
import Icon from'@material-ui/core/Icon'
import Card from'@material-ui/core/Card'
import Button from'@material-ui/core/Button'
import Textarea from 'react-textarea-autosize'

class AddCardButton extends Component {
    state = {
        formOpen: false
    }

    openForm = () => {
        this.setState({
            formOpen: true
        })
    }

    closeForm = () => {
        this.setState({
            formOpen: false
        })
    }

    handleInputChange = () => {
        this.setState({
            // text: e.target.value
        })
    }

    renderAddButton = () => {
        const {list} = this.props

        const buttonText = list ? "Add another list" : "Add another card"
        const buttonTextOpacity = list ? 1 : 0.5
        const buttonTextColor = list ? "white" : "inherit"
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit"
    
        return (
            <div onClick={this.openForm}
            style={{...styles.openForButtonGroup, 
            opacity: buttonTextOpacity, 
            color: buttonTextColor, 
            backgroundColor: buttonTextBackground}}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    renderForm = () => {
        const { list } = this.props
        const placeholder = list ? "Enter list title" : "Enter task"

        const buttonTitle = list ? "Add list" : "Add card"

        return <div>
            <Card style = {{
                overflow: 'visible',
                minHeight: 80,
                minWidth: 272,
                padding: '6px 8x 2px'
            }}>
                <Textarea 
                placeholder = {placeholder} 
                autoFocus 
                onBlur={this.closeForm} 
                value={this.state.text} 
                onChange={this.handleInputChange}
                style={{
                    resize: 'none',
                    width: '100%',
                    overflow: 'hidden',
                    outline: 'none',
                    border: 'none'
                }}
                />
            </Card>
            <div style={styles.formButtonGroup}>
                <Button variant='contained' style={{color: 'white', backgroundColor: "#008000"}}>
                    {buttonTitle}
                </Button>
                <Icon style={{marginLeft: 8, cursor: 'pointer'}}>close</Icon>
            </div>
        </div>
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton()
    }
}

const styles = {
    openForButtonGroup: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    },
    formButtonGroup: {
        marginTop: 8,
        display: 'flex',
        alignItems: 'center'
    }
}

export default AddCardButton