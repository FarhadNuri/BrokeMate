# BrokeMate

A comprehensive expense tracking and group budget management mobile application built with React Native and Firebase.

## Overview

BrokeMate is a modern expense tracking app designed to help individuals and groups manage their finances effectively. Whether you're splitting bills with roommates, tracking personal expenses, or managing group activities, BrokeMate provides an intuitive interface to keep your finances organized.

## Features

### Personal Finance Management
- **Dashboard Overview**: Real-time financial summary with income, expenses, and budget tracking
- **Expense Tracking**: Add, edit, and categorize personal expenses
- **Budget Management**: Set monthly budgets and track spending against goals
- **Visual Analytics**: Charts and graphs to visualize spending patterns

### Group Expense Management
- **Group Creation**: Create and manage expense groups with multiple members
- **Expense Splitting**: Smart expense splitting with equal, exact, or percentage-based options
- **Balance Tracking**: Real-time calculation of who owes whom
- **Settlement System**: Track and manage debt settlements between group members

### Smart Notifications
- **Payment Reminders**: Automated reminders for pending payments
- **Group Activity Updates**: Stay informed about group expense activities
- **Budget Alerts**: Notifications when approaching budget limits
- **Comprehensive Clearing**: Clear individual, section, or all notifications

### User Management
- **Profile Management**: Customize user profiles with personal information
- **Authentication**: Secure Firebase authentication system
- **Settings**: Personalized app settings and preferences

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Presentation Layer                       │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────┐ │
│  │   Screens   │  │ Components  │  │ Navigation  │  │  Assets │ │
│  │             │  │             │  │             │  │         │ │
│  │ • Dashboard │  │ • Auth      │  │ • Tab Nav   │  │ • Icons │ │
│  │ • Expenses  │  │ • Forms     │  │ • Stack Nav │  │ • Images│ │
│  │ • Groups    │  │ • Lists     │  │ • Modals    │  │ • Fonts │ │
│  │ • Profile   │  │ • Cards     │  │             │  │         │ │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────┘ │
├─────────────────────────────────────────────────────────────────┤
│                        Business Logic Layer                     │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────┐ │
│  │   Services  │  │   Models    │  │ Validation  │  │  Utils  │ │
│  │             │  │             │  │             │  │         │ │
│  │ • Auth      │  │ • Expense   │  │ • Forms     │  │ • Date  │ │
│  │ • Expense   │  │ • Group     │  │ • Data      │  │ • Format│ │
│  │ • Group     │  │ • User      │  │ • Business  │  │ • Calc  │ │
│  │ • Budget    │  │ • Budget    │  │ • Security  │  │         │ │
│  │ • Notify    │  │             │  │             │  │         │ │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────┘ │
├─────────────────────────────────────────────────────────────────┤
│                         Data Access Layer                       │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────┐ │
│  │  Firebase   │  │    Cache    │  │   Storage   │  │  Config │ │
│  │             │  │             │  │             │  │         │ │
│  │ • Firestore │  │ • Memory    │  │ • AsyncStor │  │ • Env   │ │
│  │ • Auth      │  │ • Session   │  │ • SecureStor│  │ • Keys  │ │
│  │ • Functions │  │ • Query     │  │ • FileSystem│  │ • Rules │ │
│  │ • Analytics │  │             │  │             │  │         │ │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────┘ │
├─────────────────────────────────────────────────────────────────┤
│                        Infrastructure Layer                     │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────┐ │
│  │   Platform  │  │   Network   │  │  Security   │  │ Monitor │ │
│  │             │  │             │  │             │  │         │ │
│  │ • React Nat │  │ • HTTP      │  │ • Auth      │  │ • Logs  │ │
│  │ • Expo      │  │ • WebSocket │  │ • Encrypt   │  │ • Crash │ │
│  │ • iOS/Andr  │  │ • Offline   │  │ • Validate  │  │ • Perf  │ │
│  │             │  │             │  │             │  │         │ │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

## Technology Stack

### Frontend
- **Framework**: React Native 0.79.5
- **Platform**: Expo SDK 53
- **Navigation**: React Navigation v7 (Stack & Tab Navigation)
- **State Management**: React Hooks & Context API
- **UI Library**: Custom components with responsive design
- **Typography**: Plus Jakarta Sans font family
- **Styling**: StyleSheet with responsive screen dimensions

### Backend & Services
- **Database**: Firebase Firestore (NoSQL)
- **Authentication**: Firebase Auth
- **Cloud Functions**: Firebase Functions
- **Storage**: AsyncStorage for local data
- **Push Notifications**: Expo Notifications
- **Real-time Updates**: Firestore real-time listeners

### Development Tools
- **Language**: JavaScript with TypeScript support
- **Build Tool**: Expo CLI
- **Version Control**: Git
- **Package Manager**: npm
- **Code Quality**: ESLint, Prettier

## Project Structure

```
brokemate/
├── components/              # Reusable UI components
│   └── auth/               # Authentication components
│       ├── LoginScreen.js
│       └── SignUpScreen.js
├── models/                 # Data models and validation
│   └── dataModels.js      # Expense, Group, User models
├── navigation/             # Navigation configuration
│   └── MainTabNavigator.js
├── screens/                # Application screens
│   ├── DashboardScreen.js     # Main dashboard
│   ├── ExpenseScreen.js       # Personal expenses
│   ├── AddExpenseScreen.js    # Add/edit expenses
│   ├── GroupsScreen.js        # Groups overview
│   ├── GroupDetailsScreen.js  # Group details & balances
│   ├── NotificationsScreen.js # Notification center
│   ├── ProfileScreen.js       # User profile
│   └── SettingsScreen.js      # App settings
├── services/               # Business logic and API services
│   ├── authService.js         # Authentication logic
│   ├── expenseService.js      # Expense CRUD operations
│   ├── groupService.js        # Group management
│   ├── budgetService.js       # Budget tracking
│   ├── notificationService.js # Push notifications
│   └── databaseService.js     # Core database operations
├── assets/                 # Static resources
│   ├── images/            # App images and icons
│   └── fonts/             # Custom fonts
├── App.js                 # Application entry point
├── firebaseConfig.js      # Firebase configuration
├── firestore.rules        # Firestore security rules
└── package.json           # Dependencies and scripts
```

### Core Services
- **authService.js**: User authentication and session management
- **expenseService.js**: Expense CRUD operations and real-time updates
- **groupService.js**: Group management and member operations
- **budgetService.js**: Budget creation and tracking
- **notificationService.js**: Push notifications and alerts
- **databaseService.js**: Core database operations

### Key Screens
- **DashboardScreen**: Financial overview and quick actions
- **ExpenseScreen**: Personal expense management
- **GroupsScreen**: Group overview and management
- **AddExpenseScreen**: Expense creation with smart splitting
- **GroupDetailsScreen**: Detailed group view with balances
- **NotificationsScreen**: Notification center with clearing options
- **ProfileScreen**: User profile and settings

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Firebase project setup

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/brokemate.git
   cd brokemate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Firebase Setup**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Firestore Database
   - Download the configuration file and update `firebaseConfig.js`

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Run on device/emulator**
   ```bash
   npm run android  # For Android
   npm run ios      # For iOS
   ```


## Platform Support

- **iOS**: Full support with native iOS design patterns
- **Android**: Full support with Material Design elements
- **Web**: Basic web support through Expo

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## Support

For support, email farhadnuri559@gmails=.com or create an issue in this repository.

---

**Built with React Native and Firebase**