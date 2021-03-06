
/**
 *
 */
class Connection
{
    constructor() {
        this._protocol = null;
        this._user = null;
        this._password = null;
        this._name = null;

        this._hosts = null;
        this._options = null;

        this._mongoose = null;
    }

    /**
     *
     * @return {null}
     */
    get protocol() {
        return this._protocol;
    }

    /**
     *
     * @param value
     */
    set protocol(value) {
        this._protocol = value;
    }

    /**
     *
     * @return {null}
     */
    get user() {
        return this._user;
    }

    /**
     *
     * @param value
     */
    set user(value) {
        this._user = value;
    }

    /**
     *
     * @return {null}
     */
    get password() {
        return this._password;
    }

    /**
     *
     * @param value
     */
    set password(value) {
        this._password = value;
    }

    /**
     *
     * @return {Array}
     */
    get hosts() {
        return this._hosts;
    }

    /**
     *
     * @param value
     */
    set hosts(value) {
        this._hosts = value;
    }

    /**
     *
     * @return {Array}
     */
    get options() {
        return this._options;
    }

    /**
     *
     * @param value
     */
    set options(value) {
        this._options = value;
    }

    /**
     *
     * @return {null}
     */
    get name() {
        return this._name;
    }

    /**
     *
     * @param value
     */
    set name(value) {
        this._name = value;
    }

    /**
     *
     * @return {mongoose}
     */
    get mongoose() {
        return this._mongoose;
    }

    /**
     *
     * @param value
     */
    set mongoose(value) {
        this._mongoose = value;
    }

    toArray() {
        const url = [];
        url.push(this.protocol + '://');

        if (this.user && this.password) {
            url.push(this.user);
            url.push(':');
            url.push(this.password);
            url.push('@');
        }

        url.push(this.hosts.toString());
        url.push('/');
        url.push(this.name);

        return [
            url.join(''),
            this._options.toArray(),
        ];
    }

    /**
     *
     * @return {Promise<Connection>}
     */
    async connect() {
        const [url, options] = this.toArray();
        await this._mongoose.connect(url, options);
        return this._mongoose.connection;
    }
}

export default Connection;
