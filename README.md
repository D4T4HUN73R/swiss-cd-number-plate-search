# Swiss Corps Diplomatique Number Plate Search

A web-based search tool for diplomatic and consular vehicle number plates in Switzerland. This tool helps identify vehicles belonging to diplomatic missions, consular posts, and international organizations based in Switzerland.

## Features

- Search CD (Diplomatic), CC (Consular), and AT (Administrative/Technical) number plates
- Support for Swiss canton codes and numerical identifiers
- Detailed country and organization information lookup 
- Visual ranking system for diplomatic staff
- Emoji country flags for better visualization
- Responsive web interface that works on all devices

## Usage

Enter a number plate in the format: `CD/CC/AT XX XXX·XXX`

- **CD**: Official cars of diplomatic missions or motor vehicles of diplomatic staff members
- **CC**: Vehicles of consular posts or consular officials  
- **AT**: Vehicles belonging to members of administrative and technical staff of diplomatic missions
- **XX**: Swiss canton code (e.g., BE for Bern)
- **XXX·XXX**: Numerical identifiers

### Examples:
- `CD BE 001·073` - Example diplomatic mission vehicle
- `CC VD 012·456` - Example consular post vehicle  
- `AT ZH 005·123` - Example administrative staff vehicle

## Number Plate Types

### Organizations (01-35)
International organizations based in Switzerland with their own plate codes.

### Diplomatic Missions (01-181)
Country diplomatic missions represented in Switzerland.

### Permanent Observer Missions (201-217)
Permanent observer missions of international organizations.

### International Disarmament Talks (3xx series)  
Special arrangements for disarmament negotiations.

### WTO Missions (5xx series)
World Trade Organization missions and related organizations.

## How It Works

This tool processes number plate data entirely offline in the browser:
- No network calls are made
- All operations happen locally on your device
- Information is retrieved from a comprehensive JavaScript database
- No data is stored or sent anywhere

## Security Considerations

- All processing happens client-side in your browser
- No external API calls are made
- No persistent storage is used (except for local logging as described below)
- Input validation and sanitization built-in
- Complete privacy - no tracking or analytics

## Logging

For analytical purposes, the application can optionally log search queries with additional metadata to a local `.log/cd_searches.log` file. The logging includes:

- Timestamp of search
- User agent string 
- IP address
- Geolocation coordinates (if granted by user)
- The actual search query in CD BE 001·073 format

This logging is enabled only when the user explicitly grants permission for geolocation and is completely optional. All logs are stored locally on your device and never sent to any server.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Development

The tool consists of:
- `index.html`: Main user interface
- `styles.css`: Styling and layout  
- `script.js`: Logic and data handling

### Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

## Repository Information

This is an implementation of a Swiss Corps Diplomatique number plate search tool for diplomatic and consular vehicles in Switzerland.

The database contains over 200 country diplomatic missions, international organizations, permanent observer missions, and special arrangement codes.