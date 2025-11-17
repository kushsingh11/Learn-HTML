import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type CodeEditorNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CodeEditor'
>;
type CodeEditorRouteProp = RouteProp<RootStackParamList, 'CodeEditor'>;

interface Props {
  navigation: CodeEditorNavigationProp;
  route: CodeEditorRouteProp;
}

const { height } = Dimensions.get('window');

const CodeEditorScreen: React.FC<Props> = ({ navigation, route }) => {
  const { lesson } = route.params;
  const [code, setCode] = useState(lesson.example);
  const [showPreview, setShowPreview] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  const webViewRef = useRef<WebView>(null);

  const updatePreview = () => {
    if (webViewRef.current && showPreview) {
      webViewRef.current.reload();
    }
  };

  const resetCode = () => {
    setCode(lesson.example);
    setShowAnswer(false);
  };

  const loadAnswer = () => {
    if (lesson.exerciseAnswer) {
      setCode(lesson.exerciseAnswer);
      setShowAnswer(true);
    }
  };

  const getFullHTML = (htmlCode: string): string => {
    // If the code already has <!DOCTYPE html>, use it as is
    if (htmlCode.trim().toLowerCase().startsWith('<!doctype html>')) {
      return htmlCode;
    }

    // Otherwise, wrap it in a basic HTML structure
    return `<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 10px;
            margin: 0;
        }
    </style>
</head>
<body>
${htmlCode}
</body>
</html>`;
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2196F3" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Code Editor</Text>
        <Text style={styles.headerSubtitle}>{lesson.title}</Text>
      </View>

      <View style={styles.toolbar}>
        <TouchableOpacity style={styles.toolbarButton} onPress={resetCode}>
          <Text style={styles.toolbarButtonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toolbarButton, styles.previewButton]}
          onPress={() => {
            setShowPreview(!showPreview);
            if (!showPreview) {
              setTimeout(updatePreview, 100);
            }
          }}
        >
          <Text style={styles.toolbarButtonText}>
            {showPreview ? 'Hide Preview' : 'Show Preview'}
          </Text>
        </TouchableOpacity>
        {lesson.exerciseAnswer && (
          <TouchableOpacity
            style={[styles.toolbarButton, styles.answerButton]}
            onPress={loadAnswer}
          >
            <Text style={styles.toolbarButtonText}>
              {showAnswer ? 'Answer ✓' : 'Show Answer'}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.content}>
        <View style={styles.editorSection}>
          <Text style={styles.sectionLabel}>HTML Code:</Text>
          <ScrollView style={styles.editorContainer}>
            <TextInput
              style={styles.editor}
              value={code}
              onChangeText={setCode}
              multiline
              autoCapitalize="none"
              autoCorrect={false}
              spellCheck={false}
              textAlignVertical="top"
            />
          </ScrollView>
          <TouchableOpacity style={styles.runButton} onPress={updatePreview}>
            <Text style={styles.runButtonText}>▶ Run Code</Text>
          </TouchableOpacity>
        </View>

        {showPreview && (
          <View style={styles.previewSection}>
            <Text style={styles.sectionLabel}>Live Preview:</Text>
            <View style={styles.previewContainer}>
              <WebView
                ref={webViewRef}
                originWhitelist={['*']}
                source={{ html: getFullHTML(code) }}
                style={styles.webview}
                javaScriptEnabled={true}
                domStorageEnabled={true}
              />
            </View>
          </View>
        )}
      </View>

      {lesson.exercise && (
        <View style={styles.exerciseHint}>
          <Text style={styles.exerciseLabel}>Exercise:</Text>
          <Text style={styles.exerciseText}>{lesson.exercise}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 16,
    paddingTop: 40,
  },
  backButton: {
    marginBottom: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: 4,
  },
  toolbar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  toolbarButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#666',
    borderRadius: 6,
    marginRight: 8,
  },
  previewButton: {
    backgroundColor: '#2196F3',
  },
  answerButton: {
    backgroundColor: '#FF9800',
  },
  toolbarButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  editorSection: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  editorContainer: {
    flex: 1,
  },
  editor: {
    flex: 1,
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#333',
    padding: 12,
    minHeight: 150,
  },
  runButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  runButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  previewSection: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 8,
    marginTop: 0,
    borderRadius: 8,
    overflow: 'hidden',
  },
  previewContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
    backgroundColor: '#fff',
  },
  exerciseHint: {
    backgroundColor: '#FFF3E0',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#FFE0B2',
  },
  exerciseLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#E65100',
    marginBottom: 4,
  },
  exerciseText: {
    fontSize: 12,
    color: '#E65100',
    fontStyle: 'italic',
  },
});

export default CodeEditorScreen;
